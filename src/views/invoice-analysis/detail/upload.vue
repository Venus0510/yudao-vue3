<template>
  <el-dialog title="上传发票信息" v-model="dialogFormVisible" width="50%" @open="openDialog">
    <div class="dialog-content">
      <el-upload
        drag
        action
        multiple
        :limit="10"
        ref="upload"
        :auto-upload="false"
        :on-change="handleFileChange"
        :on-remove="handleFileChange"
        :on-exceed="handleExceed"
        :file-list="fileList"
        accept=".pdf,.PDF"
        style="width: 100%"
        element-loading-text="文件较大时上传较慢，请耐心等候"
      >
        <Icon icon="ep:upload" :size="24" />
        <div class="el-upload__text"> 将文件拖到此处，或<em>&nbsp;点击上传</em> </div>
        <template #tip>
          <div class="el-upload__tip">只能上传最多10个PDF文件</div>
          <div v-show="ifShowFileError" class="el-upload__tip error">文件不能为空</div>
        </template>
      </el-upload>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitUpload" :loading="loading_upload_bond">
          导入</el-button
        >
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { ElMessage } from 'element-plus'
import { uploadInvoiceFiles } from '@/api/oldApi/reimbursement/index.js'

export default {
  components: {},
  data() {
    return {
      fileList: [],
      loading_upload_bond: false,
      ifShowFileError: false,
      dialogFormVisible: false
    }
  },
  mounted() {},
  methods: {
    openDialog() {
      this.dialogFormVisible = true
    },
    handleExceed() {
      ElMessage.warning('最多可以上传10个文件！')
      return
    },
    handleFileChange(file, fileList) {
      this.fileList = fileList
      if (this.fileList.length > 0) {
        this.ifShowFileError = false
      }
    },
    submitUpload() {
      if (this.fileList.length === 0) {
        this.ifShowFileError = true
        return
      }
      this.loading_upload_bond = true
      const formData = new FormData()
      this.fileList.forEach((file) => {
        formData.append('files', file.raw)
      })
      formData.append('reimbursement_code', this.$route.params.id)
      uploadInvoiceFiles(formData)
        .then(() => {
          this.fileList = []
          this.loading_upload_bond = false
          ElMessage.success('上传成功')
          this.$emit('updateList')
        })
        .catch((err) => {
          this.loading_upload_bond = false
          ElMessage.error(err.msg || '上传失败，请重试！')
        })
        .finally(() => {
          this.dialogFormVisible = false
        })
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-upload {
  width: 100%;
}

::v-deep .el-upload-dragger {
  width: 100%;
}
</style>
