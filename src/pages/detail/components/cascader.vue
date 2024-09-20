<script>
import pc from './pc.json';

export default {
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      options: this.transformData(pc)
    }
  },
  methods: {
    transformData(data) {
      return Object.keys(data).map(province => ({
        value: province,
        label: province,
        children: data[province].map(city => ({
          value: city,
          label: city
        }))
      }));
    },
    handleChange(value) {
      this.$emit('input', value);
    }
  }
}
</script>

<template>
  <a-cascader
    :options="options"
    :value="value"
    @change="handleChange"
    placeholder="请选择省市"
    style="width: 100%"
  />
</template>

<style scoped lang="less">
</style>
