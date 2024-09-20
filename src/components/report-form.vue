<template>
  <a-form-model
      :model="formState"
      :rules="rules"
      ref="ruleForm"
  >
    <a-row :gutter="8">
      <a-col v-for="(key,value) in formState" :key="value" :xs="24" :xl="formBase[value].span">
        <a-form-model-item
            :label="formBase[value].title"
            :extra="formBase[value].description"
            class="inline-form-item"
            :prop="value"
        >
          <a-input
              v-if="formBase[value].component === 'input'"
              v-model="formState[value]"
              :placeholder="`请输入${formBase[value].title}`"
          />
          <Select
              v-else-if="formBase[value].component === 'select'"
              v-model="formState[value]"
              :placeholder="`请选择${formBase[value].title}`"
              :options="formBase[value].options"
          />
          <DatePicker
              v-else-if="formBase[value].component === 'date'"
              v-model="formState[value]"
              :placeholder="`请选择${formBase[value].title}`"
          />
          <a-textarea style="width: 100%" v-else>
            <a-textarea
                v-model="formState[value]"
                :placeholder="formBase[value].placeholder"
            />
          </a-textarea>
        </a-form-model-item>
      </a-col>
    </a-row>

    <!-- 实现文件上传 -->
      <a-upload
        :action="uploadAction"
        :multiple="true"
        :fileList="fileList"
        @change="handleFileChange"
      >
        <a-button>
          <a-icon type="upload" /> 点击上传
        </a-button>
      </a-upload>

    <a-form-item>
      <a-button style="margin-right: 12px" type="primary" @click="handleSubmit">
        {{ activeKey === 'anonymous' ? '匿名' : '实名' }}举报
      </a-button>
      <a-button>
        取消
      </a-button>
    </a-form-item>
  </a-form-model>
</template>

<script>
import Select from "@/components/select.vue";
import DatePicker from "@/components/date-picker.vue";

export default {
  components: {
    Select,
    DatePicker
  },
  props: {
    activeKey: {
      type: String,
      default: "anonymous"
    },
    state: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      fileList: [],
      formBase: {
        username: {
          title: "您的名字",
          span: 12,
          required: true,
          component: "input",
        },
        email: {
          title: "您的邮箱",
          span: 12,
          required: true,
          component: "input",
        },
        phone: {
          title: "您的手机号",
          span: 12,
          required: true,
          component: "input",
        },
        type: {
          title: "举报类型",
          span: 24,
          required: true,
          component: "select",
          options: [
            {value: '1', label: '类型1'},
            {value: '2', label: '类型2'},
            {value: '3', label: '类型3'}
          ]
        },
        city: {
          title: "举报城市",
          span: 12,
          required: true,
          component: "select",
          options: [
            {value: '1', label: '城市1'},
            {value: '2', label: '城市2'},
            {value: '3', label: '城市3'}
          ]
        },
        person: {
          title: "被举报人姓名及岗位",
          span: 12,
          required: true,
          component: "input",
        },
        department: {
          title: "被举报人所在部门",
          span: 12,
          required: true,
          component: "input",
        },
        date: {
          title: "发生时间",
          span: 12,
          required: true,
          component: "date",
        },
        content: {
          title: "举报内容",
          span: 24,
          required: true,
          component: "textarea",
          description: "为确保您的举报能有效快速的得到回复，请您具体地描述事件的起因、经过、结果以及对您造成的影响"
        },
      },
      formState: this.state,

      uploadAction: 'https://api.imyuanli.cn/api/tools/upload_avatar/', // 设置上传文件的接口地址
      rules: {
        username: [{ required: true, message: '请输入您的名字', trigger: 'blur' }],
        email: [
          { required: true, message: '请输入您的邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入您的手机号', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号格式', trigger: 'blur' }
        ],
        type: [{ required: true, message: '请选择举报类型', trigger: 'change' }],
        city: [{ required: true, message: '请选择举报城市', trigger: 'change' }],
        person: [{ required: true, message: '请输入被举报人姓名及岗位', trigger: 'blur' }],
        department: [{ required: true, message: '请输入被举报人所在部门', trigger: 'blur' }],
        date: [{ required: true, message: '请选择发生时间', trigger: 'change' }],
        content: [{ required: true, message: '请输入举报内容', trigger: 'blur' }],
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log('提交成功!', this.formState);
        } else {
          console.log('验证失败');
          return false;
        }
      });
    },
    handleFileChange(info) {
      debugger
      let fileList = [...info.fileList];
      fileList = fileList.map(file => {
        if (file.response) {
          file.url = file.response.url;
        }
        return file;
      });
      this.fileList = fileList;
      debugger
    }
  }
}
</script>

<style scoped lang="less">
// pc
@media screen and (min-width: 768px) {
  .inline-form-item {
      display: flex;
      align-items: flex-start;
    /deep/ .ant-form-item-label {
      width: 110px;
      margin-right: 10px;
    }
    /deep/ .ant-form-item-control-wrapper {
      flex: 1;
    }
  }
  .bottom_textarea{
      transform: translateY(4px);
  }
}
</style>