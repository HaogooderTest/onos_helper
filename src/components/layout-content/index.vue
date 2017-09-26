<template>
  <div class="layout-content">
    <div class="layout-content-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.layout-content {
  overflow: hidden;
}
.layout-content-main{
  margin: 15px;
  /* padding: 10px; */
  /* background: #fff; */
  /* border-radius: 4px; */
}
</style>
