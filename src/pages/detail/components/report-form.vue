<template>
  <a-locale-provider :locale="zh_CN">
    <a-form-model
      ref="ruleForm"
      :model="formState"
      :rules="rules"
    >
      <a-row :gutter="8">
        <a-col v-for="(key,value) in formState" :key="value"  :md="formBase[value].span">
          <a-form-model-item
              :label="formBase[value].title"
              :extra="activeKey==0 ? formBase[value].description : ''"
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
            <Cascader 
              v-else-if="formBase[value].component === 'cascader'" 
              v-model="formState[value]"
            />
            <DatePicker
                v-else-if="formBase[value].component === 'date'"
                v-model="formState[value]"
                :placeholder="`请选择${formBase[value].title}`"
            />
            <a-textarea
                class="bottom_textarea"
                v-else
                v-model="formState[value]"
                :placeholder="formBase[value].placeholder"
                style="width: 100%"
            />
          </a-form-model-item>
        </a-col>
      </a-row>

      <view class="upload">
        <ChooseFile/>
      </view>

      <view class="btns">
        <view class="btn_submit flex-center" @click="handleSubmit">提交</view>
        <view class="btn_cancel flex-center">取消</view>
      </view>
    </a-form-model>
  </a-locale-provider>

</template>

<script>
import Select from "./select.vue";
import ChooseFile from "./chooseFile.vue";
import DatePicker from "./date-picker.vue";
import Cascader from "./cascader.vue";
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

export default {
  components: {
    Select,
    DatePicker,
    Cascader,
    ChooseFile
  },
  props: {
    activeKey: {
      type: Number,
      default: 0
    },
    state: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      zh_CN,
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
          title: "您的电话",
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
            {value: '1', label: '索取或收受不正当利益，"吃、拿、卡、要"等行为'},
            {value: '2', label: '弄虚作假行为'},
            {value: '3', label: '窃取、泄露、贩卖公司信息行为'},
            {value: '4', label: '投资与公司业务利益冲突或在外兼职的行为'},
            {value: '5', label: '利用职位之便或公司资源为特定关系人员谋取利益行为'},
            {value: '6', label: '散布严重影响公司声誉的言论行为'},
            {value: '7', label: '其他'}
          ]
        },
        city: {
          title: "举报城市",
          span: 12,
          required: true,
          component: "cascader"
        },
        person: {
          title: "被举报人",
          span: 12,
          required: true,
          component: "input",
        },
        department: {
          title: "被举报人部门",
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
          placeholder:  "请输入衡量标准",
          description: "为确保您的举报能有效快速的得到回复，请您具体地描述事件的起因、经过、结果以及对您造成的影响"
        },
      },
      formState: this.state,
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
        date: [{ required: true, message: '请选择发生时间', trigger: 'change' }],
        content: [{ required: true, message: '请输入举报内容', trigger: 'blur' }]
      },
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
    }
    
  }
}
</script>

<style scoped lang="less">
.flex-center{
  display: flex;
  align-items: center;
  justify-content: center;
}



.btns{
  margin-top: 32px;
  padding-bottom: 20px;
  display: flex;
  .btn_submit{
    width: 130rpx;
    height: 64rpx;
    background: #d7000f;
    border-radius: 8rpx;
    font-size: 28rpx;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: Regular;
    color: #ffffff;
    line-height: 44rpx;
    transition: all 0.3s ease;
    
    &:hover {
      background: #ff1a1a;
    }
    
    &:active {
      background: #b30000;
    }
  }
  .btn_cancel{
    margin-left: 16rpx;
    width: 130rpx;
    height: 64rpx;
    background: #ffffff;
    border: 2rpx solid #d9d9d9;
    border-radius: 8rpx;
    font-size: 28rpx;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: Regular;
    color: rgba(0,0,0,0.65);
    line-height: 44rpx;
    transition: all 0.3s ease;
    
    &:hover {
      background: #f5f5f5;
      border-color: #bfbfbf;
    }
    
    &:active {
      background: #e6e6e6;
      border-color: #a6a6a6;
    }
  }
}

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
  .btns{
    margin-left: 120px;
  }
}

</style>