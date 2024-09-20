<script>
import moment from 'moment';
export default {
  props: {
    value: {
      type: null,
      default: undefined
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectValue: this.value,
    }
  },
  methods: {
    moment,
    handleChange(date, dateString) {
      this.$emit('input', dateString); // 发出 input 事件以更新父组件的值
    }
  }
}
</script>

<template>
  <div>
    <a-range-picker
      :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
      :value="value"
      style="width: 100%"
      @change="handleChange"
    />
  </div>
</template>

<style scoped lang="less">

</style>