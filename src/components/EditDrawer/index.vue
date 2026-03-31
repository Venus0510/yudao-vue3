<template>
  <div class="edit-drawer-wrapper">
    <el-drawer
      v-if="drawerVisible"
      :title="title"
      v-model="drawerVisible"
      :direction="direction"
      :close-on-click-modal="false"
      :destroy-on-close="true"
      custom-class="edit-drawer"
      size="464px"
    >
      <div class="edit-drawer__content" v-if="localForm">
        <el-form
          @submit.prevent
          :model="localForm"
          :rules="rules"
          class="edit-drawer__content-form"
          label-position="top"
          label-width="200px"
          ref="form"
        >
          <el-form-item
            v-for="(item, index) in formLabelList"
            :key="item.prop"
            :label="item.label"
            :disabled="item.disabled"
          >
            <el-date-picker
              v-if="item.type === 'date'"
              style="width: 200px"
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
              style="width: 200px"
              :teleported="false"
            >
              <el-option
                v-for="(item, index) in selectOptions[item.prop]"
                :label="item.label"
                :value="item.value"
                :key="item.label"
              />
            </el-select>
            <el-radio-group
              v-else-if="item.type === 'radio'"
              :disabled="item.disabled || false"
              v-model="localForm[item.prop]"
              @change="handleFormChange"
            >
              <el-radio
                v-for="(item, index) in selectOptions[item.prop]"
                :label="item.value"
                :key="item.label"
                >{{ item.label }}</el-radio
              >
            </el-radio-group>
            <el-input
              v-else
              :type="item.type"
              :disabled="item.disabled || false"
              style="width: 200px"
              v-model="localForm[item.prop]"
              autocomplete="off"
              :maxlength="item.prop === 'instrument_name' ? 30 : null"
            />
          </el-form-item>
        </el-form>
        <div class="edit-drawer__footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="submit" :loading="loading">确 定</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: '标题'
    },
    direction: {
      type: String,
      default: 'rtl'
    },
    rules: {
      type: Object,
      default: () => {}
    },
    formData: {
      type: Object,
      default: () => {}
    },
    selectOptions: {
      type: Object,
      default: () => {}
    },
    formLabelList: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      drawerVisible: false,
      loading: false,
      localForm: {}
    }
  },
  watch: {
    formData(value) {
      if (value) {
        this.localForm = { ...value }
      }
    }
  },
  methods: {
    openDialog() {
      this.$refs.form?.resetFields()
      this.drawerVisible = true
    },
    submit() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          this.dialogLoading = false
          this.dialogFormVisible = false
          this.$emit('confirmDialog', this.localForm)
        } else {
          return false
        }
      })
    },
    cancel() {
      this.drawerVisible = false
    },
    handleFormChange(value) {
      this.$emit('handleFormChangeDraw', value)
    }
  }
}
</script>
<style lang="scss" scoped>
.edit-drawer-wrapper {
  ::v-deep .el-drawer__header {
    margin: 0;
    padding: 20px;
    border-bottom: 1px solid #e4e7ed;
  }
}
.edit-drawer {
  height: 100%;
  min-width: 450px;
  &__content {
    padding: 20px;
    height: 100%;
    &-form {
      height: calc(100% - 32px);
      overflow-y: auto;
      overflow-x: hidden;
      display: flex;
      justify-content: space-between;
      align-content: flex-start;
      flex-wrap: wrap;
      ::v-deep .el-form-item {
        margin-bottom: 12px;
        &__label {
          line-height: 28px;
          margin-bottom: 3px;
          padding: 0;
          font-weight: normal;
        }
      }
    }
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
