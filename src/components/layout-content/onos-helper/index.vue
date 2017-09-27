<template>
  <Card :bordered="false">
    <!-- 标题 -->
    <p slot="title">ONOS小助手</p>
    <!-- 主体 -->
    <div style="height:400px">
      <Row>
        <!-- 侧边导航 -->
        <Col span="6">
          <onos-sidebar></onos-sidebar>
        </Col>
        <Col span="18">
        1
        </Col>
      </Row>
    </div>
  </Card>
</template>

<style scoped>

</style>

<script>
import OnosSidebar from '@/components/layout-content/onos-helper/onos-sidebar'

export default {
  name: 'onos-helper',
  components: {
    OnosSidebar
  }
}
</script>
