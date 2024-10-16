<script>
import uniDatetimePicker from '@/components/uni-datetime-picker/uni-datetime-picker.vue';
export default {
  components: {
    uniDatetimePicker
  },
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
    handleChange(date) {
      console.log(date);
      this.$emit('input', date); // 发出 input 事件以更新父组件的值
    }
  }
}
</script>

<template>
  <div style="margin-top:3px;">
      <uni-datetime-picker :value="value" type="daterange" @change="handleChange"/>
  </div>
</template>

<style scoped lang="less">

</style>