<template>
  <div class="front-block">
    <div class="block-title">汇简资讯</div>
    <div class="table-wrap">
      <el-table
        :data="tableData"
        height="100%"
        style="width: 100%; overflow: hidden"
        v-loading="tableLoading"
      >
        <el-table-column prop="category" label="分类" min-width="100">
          <template #default="scope">
            <el-tag :type="scope.row.category === '简 · 易读' ? '' : 'warning'">
              {{ scope.row.category }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题" min-width="200" show-overflow-tooltip>
          <template #default="scope">
            <el-link type="primary" :underline="true" @click="openTab(scope.row.url)">
              {{ scope.row.title }}
            </el-link>
          </template>
        </el-table-column>
        <el-table-column prop="publish_datetime" label="日期" min-width="120" />
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
import { getNewsArticlesList } from '@/api/front'

defineOptions({ name: 'FrontInformation' })

const tableData = ref<any[]>([])
const tableLoading = ref(false)
const total = ref(0)
const pagination = reactive({
  pageSize: 30,
  pageNum: 1
})

const getList = async () => {
  tableLoading.value = true
  try {
    const res = await getNewsArticlesList({ ...pagination })
    tableData.value = res?.rows || []
    total.value = Number(res?.total || 0)
  } finally {
    tableLoading.value = false
  }
}

const openTab = (url?: string) => {
  if (!url) {
    return
  }
  window.open(url)
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

.block-title {
  font-size: 16px;
  line-height: 24px;
  color: #30b79d;
  font-weight: 700;
  margin-bottom: 8px;
}

.table-wrap {
  flex: 1;
  min-height: 0;
}
</style>
