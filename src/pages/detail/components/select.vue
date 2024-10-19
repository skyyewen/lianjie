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
      this.$emit('input', value);
      // 触发一个自定义事件，用于通知父组件值已更改
      this.$emit('change', value);
    }
  }
}
</script>

<template>
  <div>
    <a-select
        style="width: 100%"
        :value="value"
        @change="handleChange"
        :placeholder="placeholder"
    >
      <a-select-option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.label }}
      </a-select-option>
    </a-select>
  </div>
</template>

<style scoped lang="less">

</style>
