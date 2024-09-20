<template>
  <Layout>
    <template #header>
      <a-button type="primary" shape="round">
        查看举报结果
      </a-button>
    </template>
    <template #content>
      <div class="title">
        廉政举报
      </div>
      <a-tabs v-model:activeKey="activeKey" type="card" @change="handleChange">
        <a-tab-pane key="anonymous" tab="匿名举报">
          <ReportForm :activeKey="activeKey" :state="getFormState"/>
        </a-tab-pane>
        <a-tab-pane key="real" tab="实名举报">
          <ReportForm :activeKey="activeKey" :state="getFormState"/>
        </a-tab-pane>
      </a-tabs>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/pages/index/components/layout.vue'
import ReportForm from "@/pages/index/components/report-form.vue";

export default {
  components: {
    Layout,
    ReportForm
  },
  data() {
    return {
      activeKey: "anonymous",
    }
  },
  computed: {
    getFormState() {
      return {
        ...(this.activeKey === "real" ?
                {
                  username: "",
                  email: "",
                  phone: "",
                }
                :
                {}
        ),
        type: undefined,
        city: undefined,
        person: "",
        department: "",
        date: undefined,
        content: ""
      }
    }
  },
  methods: {
    handleChange(key) {
      this.activeKey = key
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style>