<template>
  <div class="timesheet-page">
    <ContentWrap>
      <div class="header">
        <div class="header-left">
          <div class="header-icon">
            <Icon icon="ep:timer" />
          </div>
          <h1 class="header-title">TimeSheet</h1>
        </div>
        <div class="header-right">
          <el-date-picker
            v-model="selectedMonth"
            type="month"
            placeholder="选择月份"
            value-format="YYYY-MM"
            class="month-picker"
            :disabled-date="disableFutureMonth"
            @change="handleMonthChange"
          />
          <el-button type="primary" @click="openAddProjectDialog">
            <Icon icon="ep:plus" class="mr-4px" />
            添加项目
          </el-button>
          <el-button
            type="danger"
            :disabled="selectedProjectIds.length === 0"
            @click="deleteProjectBatch"
          >
            <Icon icon="ep:delete" class="mr-4px" />
            删除项目
          </el-button>
          <el-dropdown v-hasPermi="['timeSheet:export']" trigger="click" @command="exportWorkHours">
            <el-button type="primary" :loading="exportLoading">
              <Icon icon="ep:download" class="mr-4px" />
              导出工时
              <Icon icon="ep:arrow-down" class="ml-4px" />
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="item in roleLists" :key="item.role_id" :command="item">
                  {{ item.role_name }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </ContentWrap>

    <ContentWrap class="table-wrap">
      <el-table
        ref="tableRef"
        v-loading="loading"
        :key="tableKey"
        :data="tableData"
        border
        style="width: 100%"
        max-height="100%"
        show-summary
        :summary-method="getSummaries"
        @selection-change="handleSelectionChange"
        @header-click="openDateBatchTimeDialog"
        @row-dblclick="openEditRowDialog"
      >
        <el-table-column type="selection" width="55" align="center" fixed="left" />
        <el-table-column
          prop="eg_project_id"
          label="EG系统项目ID"
          min-width="120"
          show-overflow-tooltip
          fixed="left"
        />
        <el-table-column
          prop="project_name"
          label="项目名称"
          min-width="160"
          show-overflow-tooltip
          fixed="left"
        />
        <el-table-column
          v-for="(date, index) in daysInMonthList"
          :key="`date-${formatDay(date.day)}-${date.weekday}`"
          :label="`${date.day}-${date.weekday}`"
          :prop="`day_${formatDay(date.day)}`"
          min-width="80"
          align="center"
          header-align="center"
          :resizable="false"
        >
          <template #header>
            <span class="header-date" :class="getDateHeaderClass(date)">
              {{ date.day }}
              <br />
              {{ date.weekday }}
            </span>
          </template>
          <template #default="scope">
            <span>{{ getDailyHours(scope.row, index) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="rowTotalHours"
          label="合计"
          min-width="90"
          align="center"
          header-align="center"
          :resizable="false"
          fixed="right"
        >
          <template #default="scope">
            <span class="row-total">{{ scope.row.rowTotalHours }}</span>
          </template>
        </el-table-column>
      </el-table>

      <div class="tips">
        <div class="header-tooltip">
          表头颜色：
          <span class="workday-header"></span> 工作日
          <span class="workoff-header"></span> 调休上班日 <span class="weekend-header"></span> 周末
          <span class="holiday-header"></span> 法定节假日
        </div>
        <div class="tip-item">
          <div class="tip-dot"></div>
          <span>双击单元格编辑工时，默认为当天，可选择其他时间段及是否跳过法定节假日及周末</span>
        </div>
        <div class="tip-item">
          <div class="tip-dot"></div>
          <span>单击表头可批量修改所有项目当天的工时</span>
        </div>
      </div>
    </ContentWrap>

    <el-dialog v-model="addDialogVisible" title="添加新项目" width="40%">
      <el-form label-width="80px">
        <el-form-item label="选择项目">
          <el-select
            v-model="selectedProjectId"
            placeholder="请选择项目"
            style="width: 100%"
            filterable
          >
            <el-option
              v-for="item in projectList"
              :key="item.id"
              :label="item.project_name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="addDialogVisible = false">取消</el-button>
        <el-button type="primary" :disabled="!selectedProjectId" @click="addProject"
          >添加</el-button
        >
      </template>
    </el-dialog>

    <el-dialog v-model="editDialogVisible" title="编辑工时" width="40%">
      <div class="dialog-content">
        <el-form :model="editRowData" label-position="right" label-width="120px">
          <el-form-item label="选择时间段">
            <el-date-picker
              v-model="dateRange"
              type="daterange"
              range-separator="至"
              value-format="YYYY-MM-DD"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :disabled-date="disabledDateInMonth"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="editRowData.if_skip_holidays"
              >是否跳过法定节假日及周末</el-checkbox
            >
          </el-form-item>
          <el-form-item label="工时（小时）">
            <el-input-number
              v-model="editRowData.hours"
              :min="0"
              :max="24"
              :step="0.5"
              :precision="1"
              style="width: 100%"
            />
          </el-form-item>
          <el-form-item label="备注">
            <el-input
              v-model="editRowData.note"
              type="textarea"
              :rows="3"
              placeholder="请输入备注信息"
            />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveEditRowData">保存</el-button>
      </template>
    </el-dialog>

    <el-dialog v-model="batchDialogVisible" title="批量修改工时" width="40%">
      <div class="dialog-content">
        <div class="info-box"
          >将批量修改所有项目在 <b>{{ batchDayLabel }}</b> 的工时</div
        >
        <el-form label-width="120px" label-position="right">
          <el-form-item label="工时（小时）">
            <el-input-number
              v-model="batchHours"
              :min="0"
              :max="24"
              :step="0.5"
              :precision="1"
              style="width: 100%"
            />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button @click="batchDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="batchTimeUpdateByDate">批量更新</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import type { TableColumnCtx, SummaryMethod } from 'element-plus'
import { checkPermi } from '@/utils/permission'
import download from '@/utils/download'
import {
  batchUpdateWorkHoursByDate,
  batchUpdateWorkHoursByDateRange,
  createMonthlyWorkHours,
  deleteWorkHoursByProjectAndMonth,
  exportWorkHoursByRole,
  getCalendarDays,
  getRolesByUserId,
  queryAllAuditProjectManagementList,
  queryAllValuationProjectManagementList,
  queryWorkHoursByMonth
} from '@/api/business/timesheet'

defineOptions({ name: 'Timesheet' })

type CalendarDay = {
  day: number | string
  weekday: string
  is_workday?: boolean
  is_holiday?: boolean
  is_weekend?: boolean
}

type DailyHour = {
  hours?: number
  note?: string
}

type TimesheetRow = {
  project_id: number | string
  eg_project_id?: string
  project_name: string
  daily_hours: DailyHour[]
}

type ProjectItem = {
  id: number | string
  project_name: string
}

type RoleItem = {
  role_id: number | string
  role_name: string
}

type EditRowData = {
  if_skip_holidays: boolean
  project_id: number | string | undefined
  project_name: string
  note: string
  hours: number
}

const defaultMonth = dayjs().format('YYYY-MM')
const canExport = checkPermi(['timeSheet:export'])
const message = useMessage()

const selectedMonth = ref(defaultMonth)
const projectsTimeSheetLists = ref<TimesheetRow[]>([])
const projectList = ref<ProjectItem[]>([])
const roleLists = ref<RoleItem[]>([])
const daysInMonthList = ref<CalendarDay[]>([])

const loading = ref(false)
const exportLoading = ref(false)
const tableKey = ref(0)
const tableRef = ref()

const selectedProjectId = ref<number | string | undefined>()
const selectedProjectIds = ref<Array<number | string>>([])

const addDialogVisible = ref(false)

const editDialogVisible = ref(false)
const dateRange = ref<string[]>([])
const editRowData = ref<EditRowData>({
  if_skip_holidays: false,
  project_id: undefined,
  project_name: '',
  note: '',
  hours: 0
})

const batchDialogVisible = ref(false)
const batchDay = ref('')
const batchHours = ref(0)

const isAuditRole = computed(() => checkPermi(['business:pm:audit:transfer']))
const isValuationRole = computed(() => checkPermi(['business:pm:valuation:return']))

const formatDay = (day: number | string) => String(day).padStart(2, '0')

const toHour = (value: unknown) => {
  const hour = Number(value)
  return Number.isFinite(hour) ? hour : 0
}

const getDailyHours = (row: TimesheetRow, index: number) => {
  return toHour(row?.daily_hours?.[index]?.hours)
}

const tableData = computed(() => {
  return projectsTimeSheetLists.value.map((row) => {
    const rowTotalHours = row.daily_hours.reduce((sum, dayData) => sum + toHour(dayData.hours), 0)
    return {
      ...row,
      rowTotalHours: Number(rowTotalHours.toFixed(1))
    }
  })
})

const batchDayLabel = computed(() => {
  if (!batchDay.value) {
    return ''
  }
  const day = dayjs(batchDay.value)
  return day.isValid() ? `${day.date()}号` : ''
})

const disableFutureMonth = (time: Date) => dayjs(time).isAfter(dayjs(), 'month')

const disabledDateInMonth = (time: Date) => {
  if (!selectedMonth.value) {
    return false
  }
  return !dayjs(time).isSame(dayjs(`${selectedMonth.value}-01`), 'month')
}

const getDateHeaderClass = (date: CalendarDay) => {
  return {
    'workday-header': !date.is_weekend && !date.is_holiday,
    'holiday-header': !!date.is_holiday && !date.is_workday,
    'weekend-header': !!date.is_weekend && !date.is_workday,
    'workoff-header': !!date.is_workday && (!!date.is_holiday || !!date.is_weekend)
  }
}

const parseDayFromColumn = (column: Record<string, any>) => {
  const prop = column?.property
  if (!prop || typeof prop !== 'string' || !prop.startsWith('day_')) {
    return ''
  }
  return prop.replace('day_', '')
}

const getRoleLists = async () => {
  if (!canExport) {
    return
  }
  const res = await getRolesByUserId()
  roleLists.value = res?.data || []
}

const getCalendarColumn = async () => {
  const res = await getCalendarDays({ time: selectedMonth.value })
  daysInMonthList.value = res?.data || []
}

const getProjectList = async () => {
  let method
  if (isAuditRole.value) {
    method = queryAllAuditProjectManagementList
  }
  if (isValuationRole.value) {
    method = queryAllValuationProjectManagementList
  }
  if (!method) {
    projectList.value = []
    return
  }
  const res = await method({ pageEnable: false })
  projectList.value = res?.rows || []
}

const getProjectsTimeSheetLists = async () => {
  const res = await queryWorkHoursByMonth({ month: selectedMonth.value })
  projectsTimeSheetLists.value = res?.data || []
  selectedProjectIds.value = []
  await nextTick()
  tableRef.value?.clearSelection?.()
}

const loadData = async () => {
  loading.value = true
  try {
    await Promise.all([getProjectsTimeSheetLists(), getCalendarColumn(), getProjectList()])
  } finally {
    loading.value = false
  }
}

const handleMonthChange = async (val: string) => {
  if (!val) {
    return
  }
  selectedMonth.value = val
  tableKey.value += 1
  loading.value = true
  try {
    await Promise.all([getProjectsTimeSheetLists(), getCalendarColumn()])
  } finally {
    loading.value = false
  }
}

const openAddProjectDialog = () => {
  selectedProjectId.value = undefined
  addDialogVisible.value = true
}

const addProject = async () => {
  if (!selectedProjectId.value) {
    return
  }
  loading.value = true
  try {
    await createMonthlyWorkHours({
      project_id: selectedProjectId.value,
      month: selectedMonth.value
    })
    selectedProjectId.value = undefined
    addDialogVisible.value = false
    message.success('项目添加成功')
    await getProjectsTimeSheetLists()
  } finally {
    loading.value = false
  }
}

const handleSelectionChange = (selection: TimesheetRow[]) => {
  selectedProjectIds.value = selection.map((row) => row.project_id)
}

const deleteProjectBatch = async () => {
  if (selectedProjectIds.value.length === 0) {
    return
  }
  try {
    await message.confirm(`确定要删除这 ${selectedProjectIds.value.length} 个项目吗？`)
  } catch {
    return
  }

  loading.value = true
  try {
    await deleteWorkHoursByProjectAndMonth({
      project_ids: selectedProjectIds.value,
      month: selectedMonth.value
    })
    message.success('删除成功')
    await getProjectsTimeSheetLists()
  } catch (error: any) {
    message.error(error?.message ? `删除失败: ${error.message}` : '删除失败')
  } finally {
    loading.value = false
  }
}

const openDateBatchTimeDialog = (column: Record<string, any>) => {
  if (tableData.value.length === 0) {
    return
  }
  const day = parseDayFromColumn(column)
  if (!day) {
    return
  }
  batchDay.value = `${selectedMonth.value}-${day}`
  batchHours.value = 0
  batchDialogVisible.value = true
}

const batchTimeUpdateByDate = async () => {
  if (batchHours.value * tableData.value.length > 24) {
    message.error('一天工时总和不能超过24小时')
    return
  }
  await batchUpdateWorkHoursByDate({
    hours: batchHours.value,
    work_day: batchDay.value
  })
  message.success('批量更新成功')
  await getProjectsTimeSheetLists()
  batchDay.value = ''
  batchHours.value = 0
  batchDialogVisible.value = false
}

const openEditRowDialog = (row: TimesheetRow, column: Record<string, any>) => {
  const day = parseDayFromColumn(column)
  if (!day) {
    return
  }
  const dayIndex = Number(day) - 1
  const currentDay = `${selectedMonth.value}-${day}`
  dateRange.value = [currentDay, currentDay]
  editRowData.value = {
    if_skip_holidays: false,
    project_id: row.project_id,
    project_name: row.project_name,
    note: row.daily_hours?.[dayIndex]?.note || '',
    hours: toHour(row.daily_hours?.[dayIndex]?.hours)
  }
  editDialogVisible.value = true
}

const buildDateRangeDays = () => {
  if (!dateRange.value || dateRange.value.length !== 2) {
    return []
  }
  const [startDate, endDate] = dateRange.value
  let cursor = dayjs(startDate)
  const end = dayjs(endDate)
  const days: string[] = []

  while (cursor.isBefore(end, 'day') || cursor.isSame(end, 'day')) {
    const currentDate = cursor.format('YYYY-MM-DD')
    if (editRowData.value.if_skip_holidays) {
      const calendarDate = daysInMonthList.value.find((item) => Number(item.day) === cursor.date())
      if (
        calendarDate &&
        (calendarDate.is_workday || (!calendarDate.is_holiday && !calendarDate.is_weekend))
      ) {
        days.push(currentDate)
      }
    } else {
      days.push(currentDate)
    }
    cursor = cursor.add(1, 'day')
  }

  return days
}

const saveEditRowData = async () => {
  if (!editRowData.value.project_id) {
    return
  }
  loading.value = true
  try {
    await batchUpdateWorkHoursByDateRange({
      project_id: editRowData.value.project_id,
      hours: editRowData.value.hours,
      note: editRowData.value.note,
      dates: buildDateRangeDays()
    })
    message.success('工时保存成功')
    await getProjectsTimeSheetLists()
    editDialogVisible.value = false
  } finally {
    loading.value = false
  }
}

const exportWorkHours = async (role: RoleItem) => {
  if (!role?.role_id || exportLoading.value) {
    return
  }
  exportLoading.value = true
  try {
    const data = await exportWorkHoursByRole({
      month: selectedMonth.value,
      roleId: role.role_id
    })
    download.excel(data, `${role.role_name}_工时汇总.xlsx`)
  } finally {
    exportLoading.value = false
  }
}

const getSummaries: SummaryMethod<any> = ({ columns, data }) => {
  const sums: Array<string | any> = []

  columns.forEach((column: TableColumnCtx<any>, index) => {
    if (column.type === 'selection') {
      sums[index] = ''
      return
    }
    if (column.property === 'eg_project_id') {
      sums[index] = ''
      return
    }
    if (column.property === 'project_name') {
      sums[index] = '总计'
      return
    }
    if (column.property?.startsWith('day_')) {
      const dayIndex = Number(column.property.replace('day_', '')) - 1
      const total = data.reduce(
        (sum, item) => sum + toHour((item as TimesheetRow).daily_hours?.[dayIndex]?.hours),
        0
      )
      sums[index] = Number(total.toFixed(1))
      return
    }
    if (column.property === 'rowTotalHours') {
      const total = data.reduce((sum, item) => sum + toHour((item as any).rowTotalHours), 0)
      sums[index] = Number(total.toFixed(1))
      return
    }
    sums[index] = ''
  })

  return sums
}

onMounted(async () => {
  await Promise.all([loadData(), getRoleLists()])
})
</script>

<style scoped lang="scss">
.timesheet-page {
  height: 100%;
}

.header {
  background: #fff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #fff;
  background-color: var(--el-color-primary);
}

.header-title {
  margin: 0;
  color: var(--el-text-color-primary);
  font-size: 24px;
  font-weight: 600;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.month-picker {
  width: 140px;
}

.table-wrap {
  height: calc(100% - 112px);
}

.tips {
  margin-top: 16px;
  font-size: 14px;
  color: var(--el-text-color-regular);
}

.header-tooltip {
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  > span {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 2px;
    margin: 0 4px;
  }
}

.tip-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.tip-dot {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: var(--el-color-primary);
}

.workday-header {
  background-color: #e1f3ff;
}

.workoff-header {
  background-color: #a2c7f7;
}

.weekend-header {
  background-color: pink;
}

.holiday-header {
  background-color: #f6976c;
}

.header-date {
  display: block;
  width: 100%;
  text-align: center;
  padding: 8px 4px;
}

.row-total {
  font-weight: 700;
  color: var(--el-color-primary);
}

.info-box {
  padding: 0 8px;
  border-left: 3px solid var(--el-color-primary);
  color: var(--el-color-primary);
  margin-bottom: 16px;
}

:deep(.el-table thead th) {
  padding: 0 !important;

  .cell {
    height: 100%;
    padding: 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

:deep(.el-table__footer) {
  .cell {
    font-weight: 700;
    color: var(--el-color-primary);
  }
}
</style>
