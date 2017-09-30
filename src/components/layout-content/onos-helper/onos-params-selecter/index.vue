<template>
  <Form :model="formItem" :label-width="60">
    <FormItem :label="formItem.id.label">
      <Input v-model="formItem.id.value" placeholder="请输入"></Input>
    </FormItem>
    <FormItem :label="formItem.ip.label">
      <Input v-model="formItem.ip.value" placeholder="请输入"></Input>
    </FormItem>
    {{currOnosOpera}}{{formItem.id.value}}{{formItem.ip.value}}
  </Form>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'onos-params-selecter',
  props: ['currOnosOpera'],
  data: function () {
    return {
      all: {
        devOnline: [{name: 'id', desc: '设备ID'}, {name: 'ip', desc: '设备IP'}]
      },
      params: {},
      apiBody: {}
    }
  },
  computed: {
    formItem: function () {
      let param
      let paramsList = this.all[this.currOnosOpera]
      paramsList.forEach(function (ele) {
        param = ele.name
        console.log(param)
      })
    }
  },
  method: {
    getValue: function (data) {
      let retArr = []
      data.forEach(function (element) {
        retArr.push(element[1])
      }, this)
      return retArr
    }
  }
}
</script>
