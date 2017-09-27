<template>
<div class="layout-header">
  <Menu mode="horizontal" theme="primary" active-name="1">
    <Row  :gutter="0">
      <!-- Logo -->
      <Col span="4">
        <div class="layout-logo">logo</div>
      </Col>
      <!-- nav -->
      <Col span="18">

        <MenuItem name="1">
          <router-link to="/onos-helper" tag="div">
            <Icon type="ios-navigate"></Icon>
            ONOS小助手
          </router-link>
        </MenuItem>
        <MenuItem name="2">
          <Icon type="ios-paper"></Icon>
          设备监控小助手
        </MenuItem>
        <MenuItem name="3">
          <router-link to="/dev-helper" tag="div">
            <Icon type="ios-keypad"></Icon>
            设备管理小助手
          </router-link>
        </MenuItem>
        <!--
        <MenuItem name="3">
          <Icon type="ios-analytics"></Icon>
          发包抓包小助手
        </MenuItem>
        <MenuItem name="4">
          <Icon type="ios-paper"></Icon>
          设备监控小助手
        </MenuItem>
        <MenuItem name="4">
          <Icon type="ios-paper"></Icon>
          可视化配置小助手
        </MenuItem>
        -->

      </Col>
      <!-- user -->
      <Col span="2">
        头像
      </Col>
    </Row>
  </Menu>
  <!-- 
  <Menu mode="horizontal" active-name="1">
    <div class="layout-assistant">
      <MenuItem name="1">二级导航</MenuItem>
      <MenuItem name="2">二级导航</MenuItem>
      <MenuItem name="3">二级导航</MenuItem>
    </div>
  </Menu>

  <div class="layout-breadcrumb">
    <Breadcrumb>
      <BreadcrumbItem href="#">首页</BreadcrumbItem>
      <BreadcrumbItem href="#">应用中心</BreadcrumbItem>
      <BreadcrumbItem>某应用</BreadcrumbItem>
    </Breadcrumb>
  </div> -->
</div>
</template>

<style scoped>
.layout-header{
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-logo{
  width: 100%;
  height: 60px;
  /* background: #5b6270; */
  border-radius: 3px;
  /* float: left; */
  position: relative;
  /* top: 15px;
  left: 20px; */
  text-align: center;
  color: #fff;
}
.layout-assistant{
  /* width: 300px; */
  margin: 0 auto;
  height: inherit;
}
.layout-breadcrumb{
  padding: 10px 15px 0;
}
</style>

<script>
export default {
  name: 'layout-header'
}
</script>