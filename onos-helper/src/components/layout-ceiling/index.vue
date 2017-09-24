<template>
<div class="layout-ceiling">
  <div class="layout-ceiling-menu">
    <a href="#">111111</a> |
    <a href="#">222222</a> |
    <a href="#">333333</a> |
    <a href="#">444444</a>
  </div>
</div>
</template>

<style scoped>
.layout-ceiling{
  /* background: #464c5b; */
  background: #0c6bb0;
  padding: 2px 0;
  overflow: hidden;
}
.layout-ceiling-menu{
  float: right;
  margin-right: 15px;
}
.layout-ceiling-menu a{
  color: #000;
}
</style>

<script>
export default {
  name: 'layout-ceiling'
}
</script>
