<script>
export default {
  props: {
    value: {
      type: null,
      default: ""
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
    handleChange(date, dateString) {
      this.$emit('input', dateString); // 发出 input 事件以更新父组件的值
    }
  }
}
</script>

<template>
  <div>
    <!--    <div v-if="isMobile()">-->
    <!--      移动端-->
    <!--    </div>-->
    <a-date-picker
        type="date"
        style="width: 100%"
        :value="value"
        @change="handleChange"
        :placeholder="placeholder"
    >
    </a-date-picker>
  </div>
</template>

<style scoped lang="less">

</style>