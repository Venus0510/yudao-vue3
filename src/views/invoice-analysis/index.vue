<template>
  <div class="page">
    <div class="fl-sb">
      <h2 class="common-line-title">报销列表</h2>
      <el-form ref="elForm" :model="searchForm" inline>
        <el-form-item label="项目代码" prop="project_code">
          <el-input
            v-model="searchForm.project_code"
            placeholder="请输入"
            clearable
            :style="{ width: '240px' }"
          />
        </el-form-item>
        <el-form-item label="报销单号" prop="reimbursement_code">
          <el-input
            v-model="searchForm.reimbursement_code"
            placeholder="请输入"
            clearable
            :style="{ width: '240px' }"
          />
        </el-form-item>
        <el-form-item>
          <el-button @click="addRow" type="primary">
            <Icon icon="ep:circle-plus" class="mr-5px" />
            新增
          </el-button>
          <el-button @click="getList" type="primary">
            <Icon icon="ep:search" class="mr-5px" />
            查询
          </el-button>
          <el-button @click="resetForm" type="primary" plain>
            <Icon icon="ep:refresh" class="mr-5px" />
            重置
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="auto-content" style="height: calc(100% - 32px)">
      <el-table v-loading="tableLoading" :data="tableData" style="width: 100%" height="100%">
        <el-table-column
          show-overflow-tooltip
          prop="project_code"
          label="项目代码"
          min-width="140"
        />
        <el-table-column
          show-overflow-tooltip
          prop="project_name"
          label="项目名称"
          min-width="180"
        />
        <el-table-column
          show-overflow-tooltip
          prop="reimbursement_code"
          label="报销单号"
          min-width="140"
        />
        <el-table-column
          show-overflow-tooltip
          prop="total_amount"
          label="报销金额"
          min-width="140"
        />
        <el-table-column
          show-overflow-tooltip
          prop="reimbursement_date_start"
          label="开始日期"
          min-width="140"
        />
        <el-table-column
          show-overflow-tooltip
          prop="reimbursement_date_end"
          label="结束日期"
          min-width="140"
        />
        <el-table-column show-overflow-tooltip prop="create_by" label="创建人" min-width="120" />
        <el-table-column
          show-overflow-tooltip
          prop="create_time"
          label="创建日期"
          min-width="120"
        />
        <el-table-column prop="status" label="状态" min-width="80">
          <template #default="scope">
            {{ formatStatus(scope.row.status) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" min-width="140" fixed="right">
          <template #default="scope">
            <el-tooltip class="item" effect="dark" content="详情" placement="bottom">
              <el-button text @click="detailRow(scope.row)">
                <Icon icon="ep:view" class="cursor" />
              </el-button>
            </el-tooltip>
            <el-tooltip
              class="item"
              effect="dark"
              v-show="!scope.row.ifShowBtn"
              content="删除"
              placement="bottom"
            >
              <el-button text @click="deleteRow(scope.row.reimbursement_code)">
                <Icon icon="ep:delete" />
              </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="编辑" placement="bottom">
              <el-button text @click="editRow(scope.row)">
                <Icon icon="ep:edit" class="cursor" />
              </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="下载" placement="bottom">
              <el-button text :disabled="scope.row.status !== 1" @click="downloadRow(scope.row)">
                <Icon icon="ep:download" class="cursor" />
              </el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <Pagination
        :total="total || 0"
        v-model:limit="pagination.pageSize"
        v-model:page="pagination.pageNum"
        @pagination="changePagination"
      />
    </div>
    <AddDialog
      ref="AddDialogRef"
      :formLabelList="addForm"
      :formData="editFormData"
      :rules="rules"
      :title="dialogTitle"
      @confirmDialog="confirmDialog"
    />
  </div>
</template>

<script>
import { ElLoading, ElMessage } from 'element-plus'
import AddDialog from '@/components/AddDialog/index.vue'
import { downloadByData } from '@/utils/filt'
import {
  createOrUpdateReimbursementInfo,
  deleteReimbursementInfo,
  downloadReimbursementInvoiceMergePdf,
  downloadReimbursementReportZip,
  getReimbursementSummaryList
} from '@/api/oldApi/reimbursement/index.js'

export default {
  name: 'Invoice-analysis',
  components: { AddDialog },
  props: [],
  data() {
    return {
      searchForm: {
        project_code: undefined,
        project_name: undefined,
        reimbursement_code: undefined
      },
      editFormData: {
        project_code: undefined,
        project_name: undefined,
        reimbursement_code: undefined
      },
      addForm: [
        {
          label: '项目名称：',
          prop: 'project_name',
          type: 'input'
        },
        {
          label: '项目代码：',
          prop: 'project_code',
          type: 'input'
        },
        {
          label: '报销单号：',
          prop: 'reimbursement_code',
          type: 'input'
        },
        {
          label: '开始日期：',
          prop: 'reimbursement_date_start',
          type: 'date'
        },
        {
          label: '结束日期：',
          prop: 'reimbursement_date_end',
          type: 'date'
        }
      ],
      rules: {
        project_code: [{ required: true, message: '项目名称不能为空', trigger: 'blur' }],
        project_name: [{ required: true, message: '项目代码不能为空', trigger: 'blur' }],
        reimbursement_code: [{ required: true, message: '报销单号不能为空', trigger: 'blur' }]
      },
      dialogTitle: '',
      tableData: [],
      tableLoading: false,
      pagination: {
        pageSize: 30,
        pageNum: 1
      },
      total: 0
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getList()
  },
  methods: {
    formatStatus(value) {
      const statusMap = {
        0: '进行中',
        1: '成功',
        2: '失败'
      }
      return statusMap[value] || ''
    },
    resetForm() {
      this.pagination.pageNum = 1
      this.pagination.pageSize = 30
      this.$refs.elForm.resetFields()
      this.getList()
    },
    getList() {
      this.tableLoading = true
      getReimbursementSummaryList({
        ...this.searchForm,
        ...this.pagination
      })
        .then((res) => {
          this.tableData = res.rows
          this.total = res.total
        })
        .finally(() => {
          this.tableLoading = false
        })
    },
    changePagination(val) {
      this.pagination.pageSize = val.limit
      this.pagination.pageNum = val.page
      this.getList()
    },
    addRow() {
      this.editFormData = {
        project_code: undefined,
        project_name: undefined,
        reimbursement_code: undefined
      }
      this.dialogTitle = '新增报销单'
      this.$refs.AddDialogRef.openDialog()
    },
    detailRow(row) {
      this.$router.push({
        path: `/invoice-analysis/detail/index/${row.reimbursement_code}`
      })
    },
    deleteRow(code) {
      deleteReimbursementInfo([code]).then(() => {
        ElMessage.success('删除成功!')
        this.getList()
      })
    },
    editRow(row) {
      this.editFormData = { ...row }
      this.dialogTitle = '修改报销单'
      this.$refs.AddDialogRef.openDialog()
    },
    async downloadRow(row) {
      const loadingInstance = ElLoading.service({
        fullscreen: true,
        text: '正在下载，请稍后...'
      })

      let results = []
      try {
        results = await Promise.allSettled([
          downloadReimbursementReportZip(row.reimbursement_code),
          downloadReimbursementInvoiceMergePdf(row.reimbursement_code)
        ])
      } catch (error) {
        ElMessage.error('下载失败')
      } finally {
        loadingInstance.close()
      }

      const filename = `${row.reimbursement_code}_${row.project_name}`
      for (let i = 0; i < results.length; i++) {
        const result = results[i]
        if (result.status === 'fulfilled') {
          const data = result.value
          if (data instanceof Blob) {
            downloadByData(data, filename, data.type || 'application/octet-stream')
          } else {
            ElMessage.error(`${filename} 文件校验失败，下载已跳过`)
          }
        } else {
          const reason = result.reason?.msg || result.reason?.message || result.reason
          ElMessage.error(`第 ${i + 1} 个文件下载失败：${reason}`)
        }
      }
    },
    confirmDialog(val, type) {
      createOrUpdateReimbursementInfo(val).then(() => {
        ElMessage.success(type == 'add' ? '新增成功!' : '修改成功!')
        this.getList()
      })
    }
  }
}
</script>

<style></style>
