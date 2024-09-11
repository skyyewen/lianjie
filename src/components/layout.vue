<template>
  <div class="layout">
    <div class="header">
      <div>
        logo
      </div>
      <div @click="gotoCopy">copy</div>
      <slot name="header"></slot>
    </div>
    <div class="container">
      <div class="main">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoCopy() {
      uni.navigateTo({
        url: '/pages/copy/reportCorruption'
      })
    }
  }
}
</script>

<style scoped lang="less">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
}

.container {
  flex: 1;
  background-color: #f0f0f0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
}

.main {
  width: 100%;
  max-width: 1280px;
  min-height: 100%;
  padding: 48px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  gap: 16px;
}

@media (max-width: 768px) {
  .header {
    padding: 12px 24px;
  }

  .main {
    padding: 24px;
  }
}

</style>