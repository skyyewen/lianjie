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

    }
  },
  methods: {
    handleChange(date) {
      this.$emit('input', date); // 发出 input 事件以更新父组件的值
      this.$emit('change', date);
    }
  }
}
</script>

<template>
  <div style="margin-top:3px;margin-bottom: 3px;">
    <uni-datetime-picker 
      :value="value" 
      type="daterange" 
      @change="handleChange"
      class="ant-select-selection ant-select-selection--single"
    />
  </div>
</template>
<style scoped lang="less">
/deep/.uni-date-x{
  height: 32px!important;
  border: 0;
}
// uni-date-editor--x uni-date-x--border
/deep/.uni-date-editor--x{
  border: 0;
  height: 32px;
}
// uni-date ant-select-selection ant-select-selection--single
/deep/.ant-select-selection--single{
  height: 34px;
}
</style>