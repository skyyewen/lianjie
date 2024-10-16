<script>
import pc from './pc.json';
import uniDataPicker from '@/components/uni-data-picker/uni-data-picker.vue';

export default {
  components: {
    uniDataPicker
  },
  props: {
    value: {
      type: String,
      default: ''
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
        text: province,
        children: data[province].map(city => ({
          value: city,
          text: city
        }))
      }));
    },
    handleChange(value) {
      if(value.detail.value.length==0) {
        this.$emit('input', '');
      }else {
        this.$emit('input', value);
      }
    }
  }
}
</script>

<template>
  <!-- <a-cascader
    :options="options"
    :value="value"
    @change="handleChange"
    placeholder="请选择省市"
    style="width: 100%"
  /> -->
<div style="margin-top:3px;">
  <uni-data-picker :localdata="options" :value="value" placeholder="请选择省市" popup-title="请选择" @change="handleChange" ></uni-data-picker>
</div>
</template>

<style scoped lang="less">
</style>
