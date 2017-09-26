<template>
  <Menu theme="light" width="auto" accordion="true">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-paper"></Icon>
        设备级API
      </template>
      <MenuItem name="1-1">物理设备上线</MenuItem>
      <MenuItem name="1-2">添加物理接口</MenuItem>
      <MenuItem name="1-3">添加DVS</MenuItem>
      <MenuItem name="1-4">添加DVS_Link</MenuItem>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-people"></Icon>
        资源级API
      </template>
      <MenuGroup title="VR">
        <MenuItem name="2-1">添加IP组</MenuItem>
        <MenuItem name="2-2">添加服务</MenuItem>
        <MenuItem name="2-3">添加ACL</MenuItem>
      </MenuGroup>
      <MenuGroup title="VS">
        <MenuItem name="2-4">添加IP组</MenuItem>
        <MenuItem name="2-5">添加服务</MenuItem>
        <MenuItem name="2-6">添加租户ACL</MenuItem>
      </MenuGroup>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="stats-bars"></Icon>
        GET和DEL
      </template>
      <MenuGroup title="GET">
        <MenuItem name="3-1">GET</MenuItem>
      </MenuGroup>
      <MenuGroup title="DEL">
        <MenuItem name="3-2">DEL</MenuItem>
      </MenuGroup>
    </Submenu>
  </Menu>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'onos-sidebar'
}
</script>
