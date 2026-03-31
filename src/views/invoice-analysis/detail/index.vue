<template>
  <div class="page">
    <div class="fl-sb mb-8">
      <h2 class="common-line-title">
        {{ $route.params.id }}
        <Icon icon="ep:info-filled" class="hoverImg" />
      </h2>
      <div>
        <el-button class="primary-color" @click="backRouter">
          <Icon icon="ep:arrow-left" class="mr-5px" />返回上一层
        </el-button>
        <el-button @click="getList" type="primary" plain>
          <Icon icon="ep:refresh" class="mr-5px" />
          刷新列表
        </el-button>
        <el-button @click="openUpload" type="primary">
          <Icon icon="ep:upload" class="mr-5px" />
          上传
        </el-button>
      </div>
    </div>
    <span class="tips"
      >本内容由人工智能助手解析生成，可能存在理解偏差或信息不完整的情况，建议您仔细审阅，按照实际发生的明细填写（时间、地点、人员、内容）。</span
    >
    <div class="auto-content" style="height: calc(100% - 56px)">
      <el-table v-loading="tableLoading" :data="tableData" style="width: 100%" height="100%">
        <el-table-column label="行号" align="center" type="index" min-width="60" />
        <el-table-column
          show-overflow-tooltip
          prop="invoice_code"
          label="发票代码"
          min-width="120"
        />
        <el-table-column
          show-overflow-tooltip
          prop="invoice_number"
          label="发票号码"
          min-width="120"
        />
        <el-table-column
          show-overflow-tooltip
          prop="consumption_date"
          label="发生日期"
          min-width="120"
        />
        <el-table-column
          show-overflow-tooltip
          prop="invoice_item"
          label="费用摘要"
          min-width="140"
        />
        <el-table-column
          show-overflow-tooltip
          prop="total_amount"
          label="金额合计"
          min-width="120"
        />
        <el-table-column
          show-overflow-tooltip
          prop="buyer_name"
          label="购买方名称"
          min-width="140"
        />
        <el-table-column
          show-overflow-tooltip
          prop="seller_name"
          label="销售方名称"
          min-width="140"
        />
        <el-table-column
          prop="consumption_type"
          show-overflow-tooltip
          label="票据种类"
          min-width="120"
        />
        <el-table-column prop="input_tax" show-overflow-tooltip label="进项税额" min-width="140">
          <template #header>
            <div>
              <span>进项税额</span>
              <el-tooltip
                class="item ml-8"
                effect="dark"
                content="发票上的税额"
                placement="top-start"
              >
                <img src="@/assets/images/question.png" style="width: 13px; height: 13px" />
              </el-tooltip>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="has_special_vat" label="是否专票" min-width="100">
          <template #header>
            <div>
              <span>是否专票</span>
              <el-tooltip
                class="item ml-8"
                effect="dark"
                content="专票均需考虑进项税额"
                placement="top-start"
              >
                <img src="@/assets/images/question.png" style="width: 13px; height: 13px" />
              </el-tooltip>
            </div>
          </template>
          <template #default="scope">
            {{ scope.row.has_special_vat === true ? '是' : '' }}
            {{ scope.row.has_special_vat === false ? '否' : '' }}
          </template>
        </el-table-column>
        <el-table-column prop="msg" show-overflow-tooltip label="消息" min-width="100" />
        <el-table-column prop="status" label="状态" min-width="80">
          <template #default="scope">
            {{ formatStatus(scope.row.status) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" min-width="120" fixed="right">
          <template #default="scope">
            <el-tooltip
              class="item"
              effect="dark"
              v-show="!scope.row.ifShowBtn"
              content="删除"
              placement="bottom"
            >
              <el-button text @click="deleteRow(scope.row.id)">
                <Icon icon="ep:delete" />
              </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="编辑" placement="bottom">
              <el-button text @click="editRow(scope.row)">
                <Icon icon="ep:edit" class="cursor" />
              </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="下载" placement="bottom">
              <el-button text @click="downloadRow(scope.row.file_url)">
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
    <upload ref="uploadRef" @updateList="getList" />
    <EditDrawer
      ref="editDrawerRef"
      :formLabelList="formLabelList"
      :rules="rules"
      :formData="editFormData"
      :title="'编辑发票信息'"
      :selectOptions="selectOptions"
      @confirmDialog="confirmDialog"
    />
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import EditDrawer from '@/components/EditDrawer/index.vue'
import upload from './upload.vue'
import {
  deleteInvoiceListById,
  getInvoiceListByReimbursementCode,
  updateInvoiceList
} from '@/api/oldApi/reimbursement/index.js'

export default {
  name: 'InvoiceDetail',
  components: { upload, EditDrawer },
  props: [],
  data() {
    return {
      rules: {},
      formLabelList: [
        {
          label: '发票代码',
          prop: 'invoice_code',
          type: 'input',
          minWidth: 120
        },
        {
          label: '发票号码',
          prop: 'invoice_number',
          type: 'input',
          minWidth: 120
        },
        {
          label: '发生日期',
          prop: 'consumption_date',
          type: 'date',
          minWidth: 120
        },
        {
          label: '费用摘要',
          prop: 'invoice_item',
          type: 'input',
          minWidth: 120
        },
        {
          label: '金额合计',
          prop: 'total_amount',
          type: 'input',
          minWidth: 120
        },
        {
          label: '购买方名称',
          prop: 'buyer_name',
          type: 'input',
          minWidth: 120
        },
        {
          label: '销售方名称',
          prop: 'seller_name',
          type: 'input',
          minWidth: 120
        },
        {
          label: '票据种类',
          prop: 'consumption_type',
          type: 'input',
          minWidth: 120
        },
        {
          label: '进项税额',
          prop: 'input_tax',
          type: 'input',
          minWidth: 120
        },
        {
          label: '是否专票',
          prop: 'has_special_vat',
          type: 'select',
          minWidth: 120
        }
      ],
      editFormData: {},
      tableData: [],
      tableLoading: false,
      pagination: {
        pageSize: 30,
        pageNum: 1
      },
      total: 0,
      selectOptions: {
        has_special_vat: [
          { dictLabel: '是', dictValue: true },
          { dictLabel: '否', dictValue: false }
        ]
      }
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
    openUpload() {
      this.$refs.uploadRef.openDialog()
    },
    getList() {
      this.tableLoading = true
      getInvoiceListByReimbursementCode({
        reimbursement_code: this.$route.params.id,
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
    deleteRow(id) {
      deleteInvoiceListById([id]).then(() => {
        ElMessage.success('删除成功!')
        this.getList()
      })
    },
    editRow(row) {
      this.editFormData = { ...row }
      this.$refs.editDrawerRef.openDialog()
    },
    downloadRow(url) {
      window.open(url)
    },
    confirmDialog(val) {
      updateInvoiceList(val).then(() => {
        ElMessage.success('修改成功!')
        this.getList()
      })
    },
    backRouter() {
      this.$router.push({
        path: `/invoice-analysis`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.hoverImg:hover::after {
  content: '';
  width: 827px;
  height: 551px;
  background: url('@/assets/images/invoice-example.png') top center;
  background-size: 100% auto;
  position: absolute;
  top: 60px;
  left: 50%;
  z-index: 9;
}

.tips {
  display: inline-block;
  font-size: 14px;
  color: var(--el-color-primary);
  margin-bottom: 16px;
  font-weight: 900;
}
</style>
