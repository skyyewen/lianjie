<template>
  <div class="home">
    <pageHeader></pageHeader>
    <page-phone></page-phone>
    <page-pc></page-pc>
  </div>
</template>

<script>
import pageHeader from '@/components/pageHeader/pageHeader.vue'
import PagePhone from '@/components/pagePhone/pagePhone.vue'
import PagePc from '@/components/pagePc/pagePc.vue'

export default {
  components: {
    pageHeader,
    PagePhone,
    PagePc
  },
  data() {
    return {

    }
  },
  computed: {
    // subOptions() {
    //   return this.selectedOptions[0]?.children || []
    // }
  },
  methods: {


  }
}
</script>

<style lang="less" scoped>

</style>