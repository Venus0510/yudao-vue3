<template>
  <el-dialog
    :title="title"
    v-model="dialogFormVisible"
    width="35%"
    @open="openDialog"
    @close="handleDialogClose"
  >
    <div class="dialog-content">
      <el-form
        @submit.prevent
        :model="localForm"
        :label-position="'right'"
        :rules="rules"
        ref="form"
        label-width="120px"
      >
        <el-form-item
          v-for="item in formLabelList"
          :key="item.prop"
          :label="item.label"
          :prop="item.prop"
        >
          <el-date-picker
            v-if="item.type === 'date'"
            style="width: 100%"
            v-model="localForm[item.prop]"
            :disabled="item.disabled || false"
            value-format="yyyy-MM-dd"
            placeholder="请选择日期"
          />
          <el-select
            v-else-if="item.type === 'select'"
            v-model="localForm[item.prop]"
            :disabled="item.disabled || false"
            placeholder="请选择"
            style="width: 100%"
            :teleported="false"
          >
            <el-option
              v-for="(option, index) in selectOptions[item.prop]"
              :label="option.label"
              :value="option.value"
              :key="index + option.label"
            />
          </el-select>
          <el-select
            v-else-if="item.type === 'remote_select'"
            v-model="localForm[item.prop]"
            :disabled="item.disabled || false"
            placeholder="请选择"
            style="width: 100%"
            filterable
            remote
            :remote-method="remoteGetOptionList"
            :teleported="false"
          >
            <el-option
              v-for="(option, index) in selectOptions[item.prop]"
              :label="option.label"
              :value="option.value"
              :key="index + option.label"
            />
          </el-select>
          <el-radio-group
            v-else-if="item.type === 'radio'"
            v-model="localForm[item.prop]"
            @change="handleFormChange"
          >
            <el-radio
              :class="{
                'radio-item-width-2': itemEachRow === 2
              }"
              v-for="(option, index) in selectOptions[item.prop]"
              :label="option.value"
              :key="index + option.label"
              :disabled="option.disabled"
              >{{ option.label }}</el-radio
            >
          </el-radio-group>
          <el-input
            v-else
            :type="item.type"
            :disabled="item.disabled || false"
            style="width: 100%"
            v-model="localForm[item.prop]"
            autocomplete="off"
          />
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm" v-loading="dialogLoading">确 定</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    rules: {
      type: Object,
      default: () => {}
    },
    formData: {
      type: Object,
      default: () => ({})
    },
    formLabelList: {
      type: Array,
      default: () => []
    },
    selectOptions: {
      type: Object,
      default: () => {}
    },
    itemEachRow: {
      type: Number,
      default: () => null
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      dialogLoading: false,
      localForm: {}
    }
  },
  watch: {
    formData: {
      handler(newVal) {
        this.localForm = { ...newVal }
      }
    }
  },
  mounted() {},
  methods: {
    openDialog() {
      this.$refs.form?.resetFields()
      this.dialogFormVisible = true
    },
    confirm() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          this.dialogLoading = false
          this.dialogFormVisible = false
          this.$emit('confirmDialog', this.localForm, 'add')
        } else {
          return false
        }
      })
    },
    remoteGetOptionList(value) {
      this.$emit('remoteGetOptionList', value)
    },

    handleFormChange(value) {
      this.$emit('handleFormChange', value, this.localForm)
    },
    handleDialogClose() {
      this.$emit('handleDialogClose')
    }
  }
}
</script>
<style scoped lang="scss">
.radio-item-width-2 {
  width: calc(45% - 10px); /* 减去间距的影响 */
  box-sizing: border-box;
  margin: 5px 0;
}
</style>
