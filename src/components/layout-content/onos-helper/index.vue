<template>
  <Card :bordered="false">
    <!-- 标题 -->
    <p slot="title">ONOS小助手</p>
    <!-- 主体 -->
    <div style="height:400px">
      <Row>
        <!-- 侧边 -->
        <Col span="6">
          <!-- 选择操作 -->
          <Row>
            <onos-opera-selecter v-on:onosOperaChange="changeOpera"></onos-opera-selecter>
          </Row>
          <br>
          <!-- 参数选择 -->
          <Row>
            <onos-params-selecter :currOnosOpera="currOpera"></onos-params-selecter>
          </Row>
        </Col>
        <!-- 主体 -->
        <Col span="18">
        </Col>
      </Row>
    </div>
  </Card>
</template>

<style scoped>

</style>

<script>
import onosOperaSelecter from '@/components/layout-content/onos-helper/onos-opera-selecter'
import onosParamsSelecter from '@/components/layout-content/onos-helper/onos-params-selecter'

export default {
  name: 'onos-helper',
  data: function () {
    return {
      currOpera: ''
    }
  },
  components: {
    onosOperaSelecter,
    onosParamsSelecter
  },
  methods: {
    changeOpera: function (data) {
      this.currOpera = data
    }
  }
}
</script>
