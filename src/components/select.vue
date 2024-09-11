<script>
export default {
  props: {
    value: {
      type: String,
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
    handleChange(value) {
      this.$emit('input', value); // 发出 input 事件以更新父组件的值
    }
  }
}
</script>

<template>
  <div>
    <!--    <div v-if="isMobile()">-->
    <!--      移动端-->
    <!--    </div>-->
    <a-select
        style="width: 100%"
        :value="value"
        @change="handleChange"
        :placeholder="placeholder"
    >
      <a-select-option v-for="option in options" :value="option.value">
        {{ option.label }}
      </a-select-option>
    </a-select>
  </div>
</template>

<style scoped lang="less">

</style>