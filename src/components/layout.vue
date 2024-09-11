<template>
  <div class="layout">
    <div class="header">
      <div>
        logo
      </div>
      <slot name="header"></slot>
    </div>
    <div class="container">
      <div class="main">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

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
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.9);
}

.container {
  flex: 1;
  background-color: #f0f0f0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-width: 1280px;
  padding: 48px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  gap: 16px;
}

@media (max-width: 768px) {
  .main {
    padding: 24px;
  }
}

</style>