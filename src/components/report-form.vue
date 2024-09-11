<template>
  <a-form-model
      :model="formState"
  >
    <a-row :gutter="8">
      <a-col v-for="(key,value) in formState" :xs="24" :xl="formBase[value].span">
        <a-form-model-item
            :label="formBase[value].title"
            :extra="formBase[value].description"
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
          <a-textarea style="width: 100%" v-else>
            <a-textarea
                v-model="formState[value]"
                :placeholder="formBase[value].placeholder"
            />
          </a-textarea>
        </a-form-model-item>
      </a-col>
    </a-row>
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

export default {
  components: {
    Select
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
          component: "input",
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
    }
  },
  methods: {
    handleSubmit() {
      console.log('submit!', this.formState);
    }
  }
}
</script>

<style scoped lang="less">

</style>