<template>
  <div class="scatter-card">
    <div class="toolbar">
      <div class="title">相关证券估值调整汇总</div>
      <div class="toolbar-right">
        <el-date-picker
          v-model="dateRange"
          type="daterange"
          value-format="YYYY-MM-DD"
          :shortcuts="dateShortcuts"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          style="width: 240px"
          @change="getTableList"
        />
        <el-select
          v-model="stockCode"
          class="stock-select"
          remote
          filterable
          clearable
          placeholder="请输入关键词"
          :remote-method="getOptionList"
          @change="handleSelectChange"
        >
          <el-option
            v-for="item in optionList"
            :key="`${item.stock_code}-${item.stock_name}`"
            :label="`${item.stock_name}(${item.stock_code})`"
            :value="item.stock_code"
          />
        </el-select>
      </div>
    </div>

    <Echart :options="chartOption" height="100%" />

    <h4 class="tips" v-if="hasExponential && tableData[0]?.index_name">
      以{{ tableData[0].index_name }}行业指数进行指数收益法调整
    </h4>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import type { EChartsOption } from 'echarts'
import Echart from '@/components/Echart/src/Echart.vue'
import { getAdjustedStockList, getPlotDataForStock } from '@/api/front'

defineOptions({ name: 'FrontScatter' })

const optionList = ref<any[]>([])
const stockCode = ref('')
const tableData = ref<any[]>([])
const hasExponential = ref(false)
const dateRange = ref<string[]>([])

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

const chartOption = computed<EChartsOption>(() => {
  const list = tableData.value || []

  let suspensionRange: any[] = []
  if (hasExponential.value && list[0]?.suspension_range) {
    suspensionRange = (list[0].suspension_range || []).map((subArray: any[]) => {
      return subArray.map((date) => ({
        name: '停牌区间',
        xAxis: date
      }))
    })
  }

  const series = list
    .map((item) => {
      if (item.echarts_type === 'scatter') {
        return {
          color: '#30b79d',
          name: item.name,
          type: 'scatter',
          data: item.data,
          emphasis: {
            focus: 'series',
            scale: 2
          }
        }
      }
      if (item.echarts_type === 'line') {
        if (item.code === 'benchmark') {
          return {
            color: '#c0c4cc',
            name: item.name,
            type: 'line',
            data: item.data,
            markArea: {
              itemStyle: {
                color: 'rgba(255, 173, 177, 0.3)'
              },
              data: suspensionRange
            }
          }
        }
        return {
          name: item.name,
          type: 'line',
          data: item.data
        }
      }
      return null
    })
    .filter(Boolean)

  const isScatterType = list.some((item) => item.echarts_type === 'scatter')

  const tooltip = isScatterType
    ? {
        trigger: 'item'
      }
    : {
        trigger: 'none'
      }

  return {
    grid: {
      top: 30,
      left: 30,
      right: 30,
      bottom: 50,
      containLabel: true
    },
    tooltip,
    xAxis: {
      type: 'category'
    },
    dataZoom: [
      {
        type: 'inside'
      },
      {
        type: 'slider',
        height: 20,
        bottom: 30
      }
    ],
    yAxis: {
      type: 'value',
      min: ({ min }) => Math.floor(min),
      max: ({ max }) => Math.ceil(max)
    },
    series
  }
})

const getOptionList = async (keyword = '') => {
  const params = {
    stock_name_or_code: keyword,
    pageEnable: false,
    status: 3
  }
  const res = await getAdjustedStockList(params)
  optionList.value = res?.rows || []
  return optionList.value[0]
}

const getTableList = async () => {
  if (!stockCode.value) {
    tableData.value = []
    hasExponential.value = false
    return
  }
  const params = {
    pageEnable: false,
    stock_code: stockCode.value,
    status: 3,
    start_date: dateRange.value?.[0] || '',
    end_date: dateRange.value?.[1] || ''
  }
  const res = await getPlotDataForStock(params)
  tableData.value = res?.rows || []
  hasExponential.value = tableData.value.some((item) => item.has_exponential_return_method)
}

const handleSelectChange = async (val: string) => {
  if (!val) {
    tableData.value = []
    return
  }
  await getTableList()
}

onMounted(async () => {
  const first = await getOptionList()
  if (first?.stock_code) {
    stockCode.value = first.stock_code
    await getTableList()
  }
})
</script>

<style scoped lang="scss">
.scatter-card {
  position: relative;
  height: 52%;
  margin-top: 12px;
  min-height: 0;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toolbar-right {
  display: flex;
  gap: 10px;
  align-items: center;
}

.title {
  font-size: 14px;
  color: #30b79d;
  font-weight: 700;
  line-height: 32px;
}

.stock-select {
  width: 220px;
}

.tips {
  position: absolute;
  right: 0;
  bottom: 2px;
  font-size: 12px;
  color: #6e6e6e;
}
</style>
