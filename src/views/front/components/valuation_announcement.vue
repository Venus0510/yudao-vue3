<template>
  <div class="front-block">
    <div class="table-wrap">
      <el-table
        :data="tableData"
        height="100%"
        style="width: 100%; overflow: hidden"
        v-loading="tableLoading"
      >
        <el-table-column
          v-for="item in columns"
          :key="`${item.prop}-${item.label}`"
          :prop="item.prop"
          :label="item.label"
          :min-width="item.minWidth"
          :show-overflow-tooltip="item.showTooltip"
        />
        <el-table-column
          min-width="60"
          prop="file_name"
          align="center"
          label="文件名"
          show-overflow-tooltip
        >
          <template #default="scope">
            <el-tooltip effect="dark" :content="scope.row.file_name" placement="top">
              <el-link type="primary" :underline="true" @click="downloadRow(scope.row)">
                <Icon icon="ep:document" />
              </el-link>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination
      :total="total"
      v-model:limit="pagination.pageSize"
      v-model:page="pagination.pageNum"
      @pagination="getTableList"
    />
  </div>
</template>

<script lang="ts" setup>
import { getAdjustedDataList } from '@/api/front'
import { index_announcement_columns } from '../constants/data'

defineOptions({ name: 'FrontValuationAnnouncement' })

const props = defineProps<{
  dateRangeProp: string[]
}>()

const columns = index_announcement_columns
const dateRange = ref<string[]>([])
const total = ref(0)
const tableLoading = ref(false)
const tableData = ref<any[]>([])
const pagination = reactive({
  pageSize: 30,
  pageNum: 1
})

watch(
  () => props.dateRangeProp,
  (val) => {
    dateRange.value = val || []
  },
  { immediate: true, deep: true }
)

const getTableList = async () => {
  tableLoading.value = true
  try {
    const params = {
      ...pagination,
      start_date: dateRange.value[0] || '',
      end_date: dateRange.value[1] || '',
      status: 3
    }
    const res = await getAdjustedDataList(params)
    tableData.value = res?.rows || []
    total.value = Number(res?.total || 0)
  } finally {
    tableLoading.value = false
  }
}

const downloadRow = (row: any) => {
  if (row?.file_uri) {
    window.open(row.file_uri)
  }
}

defineExpose({
  getTableList
})
</script>

<style scoped lang="scss">
.front-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.table-wrap {
  flex: 1;
  min-height: 0;
}
</style>
