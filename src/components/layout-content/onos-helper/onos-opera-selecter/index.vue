<template>
  <div>
    <Row>
      <Col span="4" class="text-left">
        操作
      </Col>
      <Col span="20">
        <Select v-model="currOnosOpera" v-on:on-change="changeOnosOprea">
          <OptionGroup label="设备级别操作">
            <Option v-for="item in OnosDevOperaList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </OptionGroup>
          <OptionGroup label="VR模块操作">
            <Option v-for="item in OnosVrOperaList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </OptionGroup>
          <OptionGroup label="DVS模块操作">
            <Option v-for="item in OnosDvsOperaList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </OptionGroup>
        </Select>
      </Col>
    </Row>
  </div>
</template>

<style scoped>
.text-left{
  text-align: left;
  height: 32px;
  line-height: 32px;
}
.text-center{
  text-align: center;
  height: 32px;
  line-height: 32px;
}
.text-right{
  text-align: right;
  height: 32px;
  line-height: 32px;
}
</style>

<script>
export default {
  name: 'onos-sidebar',
  data: function () {
    return {
      currOnosOpera: '',
      OnosDevOperaList: [
        { value: 'devOnline', label: '设备上线' }
      ],
      OnosVrOperaList: [
        { value: 'createVr', label: '创建VR' }
      ],
      OnosDvsOperaList: [
        { value: 'createDvs', label: '创建DVS' }
      ]
    }
  },
  methods: {
    changeOnosOprea: function (data) {
      this.$emit('onosOperaChange', data)
    }
  }
}
</script>
