<template>
  <div class="layout">

    <!-- 吊顶 -->
    <!-- <LayoutCeiling></LayoutCeiling> -->

    <!-- 头部 -->
    <layout-header></layout-header>

    <!-- 主体 -->
    <layout-content></layout-content>

    <!-- 页脚 -->
    <layout-footer></layout-footer>

  </div>
</template>

<script>
import LayoutCeiling from '@/components/layout-ceiling'
import LayoutHeader from '@/components/layout-header'
import LayoutContent from '@/components/layout-content'
import LayoutFooter from '@/components/layout-footer'

export default {
  name: 'app',
  components: {
    LayoutCeiling,
    LayoutHeader,
    LayoutContent,
    LayoutFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.layout{
  background: #f5f7f9;
  position: relative;
  /* border: 1px solid #d7dde4; */
  /* border-radius: 4px; */
  overflow: hidden;
}

</style>
