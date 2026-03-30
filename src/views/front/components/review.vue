<template>
  <div class="front-block">
    <div class="header-row">
      <div class="block-title">标债估值复核</div>
      <p class="tips">
        <template v-if="tableData.length > 0">
          距离上次复核已经过了
          <span class="primary-color">{{ dateNum }}</span>
          天
        </template>
        <template v-else>您暂时未做过标债复核</template>
      </p>
    </div>
    <div class="table-wrap">
      <el-table
        :data="tableData"
        height="100%"
        style="width: 100%; overflow: hidden"
        v-loading="tableLoading"
      >
        <el-table-column
          prop="project_name"
          label="项目名称"
          min-width="100"
          show-overflow-tooltip
        />
        <el-table-column prop="analyze_date" label="复核日期" min-width="120" />
        <el-table-column prop="source" label="估值机构" min-width="80" show-overflow-tooltip>
          <template #default="scope">
            {{ filter_standard_bond_model(scope.row.source) }}
          </template>
        </el-table-column>
        <el-table-column prop="analyze_record_counts" label="复核数量" min-width="80" />
        <el-table-column prop="record" label="复核记录" min-width="80">
          <template #default="scope">
            <el-link
              type="primary"
              :underline="true"
              @click="queryDetail(scope.row.analyze_sheet_id, scope.row.project_name)"
            >
              查看详情
            </el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Pagination
      :total="total"
      v-model:limit="pagination.pageSize"
      v-model:page="pagination.pageNum"
      @pagination="getList"
    />
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
import { getStandardDebtAnalysis } from '@/api/front'
import { filter_standard_bond_model } from '../utils/format'

defineOptions({ name: 'FrontReview' })

const router = useRouter()

const tableData = ref<any[]>([])
const tableLoading = ref(false)
const total = ref(0)
const dateNum = ref(0)
const pagination = reactive({
  pageSize: 30,
  pageNum: 1
})

const getList = async () => {
  tableLoading.value = true
  try {
    const res = await getStandardDebtAnalysis({
      ...pagination,
      orderByColumn: 'analyze_date',
      isAsc: 'desc'
    })
    tableData.value = res?.rows || []
    total.value = Number(res?.total || 0)
    if (tableData.value.length > 0) {
      const lastDate = tableData.value[0].analyze_date
      const today = dayjs().format('YYYY-MM-DD')
      dateNum.value = dayjs(today).diff(lastDate, 'day')
    } else {
      dateNum.value = 0
    }
  } finally {
    tableLoading.value = false
  }
}

const queryDetail = (id?: string | number, title?: string) => {
  router.push({
    path: '/valuation/analysis-detail',
    query: {
      id,
      title
    }
  })
}

onMounted(() => {
  getList()
})
</script>

<style scoped lang="scss">
.front-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.header-row {
  position: relative;
  min-height: 28px;
  margin-bottom: 6px;
}

.block-title {
  font-size: 16px;
  line-height: 24px;
  color: #30b79d;
  font-weight: 700;
}

.tips {
  position: absolute;
  right: 0;
  top: 3px;
  margin: 0;
  font-size: 14px;
}

.table-wrap {
  flex: 1;
  min-height: 0;
}
</style>
