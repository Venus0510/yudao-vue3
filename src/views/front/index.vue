<template>
  <div class="front-index">
    <el-row>
      <el-col :span="24">
        <div class="front-card header-card">
          <b class="manager-name">{{ userInfo.manager_name || '-' }}</b>
          <b class="system-name">容诚汇简·审计+</b>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="16" class="content-row">
      <el-col :span="12" class="left-col">
        <div class="front-card half-card">
          <Information />
        </div>
        <div class="front-card half-card">
          <Review />
        </div>
      </el-col>

      <el-col :span="12">
        <div class="front-card right-card">
          <el-tabs v-model="activeName" @tab-click="handleTabClick">
            <el-tab-pane label="估值调整公告" name="valuation">
              <div class="tab-pane-wrap">
                <ValuationAnnouncement ref="valuationRef" :date-range-prop="dateRange" />
                <Scatter />
              </div>
            </el-tab-pane>
            <el-tab-pane label="行权公告" name="bond">
              <BondAnnouncement ref="bondRef" :date-range-prop="dateRange" />
            </el-tab-pane>
          </el-tabs>
          <div class="picker-area">
            <el-date-picker
              v-model="dateRange"
              type="daterange"
              :shortcuts="dateShortcuts"
              value-format="YYYY-MM-DD"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width: 240px"
              @change="refreshCurrentTab"
            />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import Information from './components/information.vue'
import Review from './components/review.vue'
import ValuationAnnouncement from './components/valuation_announcement.vue'
import BondAnnouncement from './components/bond_announcement.vue'
import Scatter from './components/scatter.vue'
import { getSelfUserConfig } from '@/api/front'

defineOptions({ name: 'FrontIndex' })

type TableExpose = {
  getTableList: () => Promise<void> | void
}

const userInfo = ref<Record<string, any>>({})
const activeName = ref<'valuation' | 'bond'>('valuation')
const dateRange = ref<string[]>([])

const valuationRef = ref<TableExpose>()
const bondRef = ref<TableExpose>()

const dateShortcuts = [
  {
    text: '最近一周',
    value: () => [dayjs().subtract(7, 'day').toDate(), new Date()]
  },
  {
    text: '最近一个月',
    value: () => [dayjs().subtract(30, 'day').toDate(), new Date()]
  },
  {
    text: '最近三个月',
    value: () => [dayjs().subtract(90, 'day').toDate(), new Date()]
  }
]

const getUserConfig = async () => {
  const res = await getSelfUserConfig()
  userInfo.value = res?.data || {}
}

const refreshCurrentTab = async () => {
  await nextTick()
  if (activeName.value === 'valuation') {
    await valuationRef.value?.getTableList()
    return
  }
  await bondRef.value?.getTableList()
}

const handleTabClick = () => {
  refreshCurrentTab()
}

onMounted(async () => {
  await getUserConfig()
  await refreshCurrentTab()
})
</script>

<style scoped lang="scss">
.front-index {
  height: 100%;
}

.front-card {
  border-radius: 6px;
  background-color: #fff;
  padding: 16px;
}

.header-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.manager-name,
.system-name {
  font-size: 20px;
  line-height: 28px;
}

.content-row {
  min-height: 0;
}

.left-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.half-card {
  height: calc(50vh - 100px);
  min-height: 280px;
}

.right-card {
  height: calc(100vh - 184px);
  min-height: 640px;
  position: relative;
}

.tab-pane-wrap {
  height: 100%;
}

.picker-area {
  position: absolute;
  right: 16px;
  top: 10px;
}

:deep(.el-tabs) {
  height: 100%;
}

:deep(.el-tabs__content) {
  height: calc(100% - 40px);
}

:deep(.el-tab-pane) {
  height: 100%;
}
</style>
