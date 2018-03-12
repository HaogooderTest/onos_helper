<template>
  <div>
    <!-- url -->
    <Row>
      <Col span="4" class="text-left">url</Col>
      <Col span="20">
        <Input v-model="nodeIp">
          <span slot="prepend">http://</span>
          <span slot="append">:8181/onos/v1/sangfor</span>
        </Input>
      </Col>
    </Row>
    <Row>
      <Col span="4" class="text-left">后缀</Col>
      <Col span="20">
        <Input v-model="urlSuffix">
        </Input>
      </Col>
    </Row>
    <br>

    <!-- params -->
    <Row v-for="(value, key, index) in params" :key="key">
      <Col span="4" class="text-left">{{value.name}}</Col>
      <Col span="2" class="text-left">
        <Checkbox v-model="value.selected"></Checkbox>
      </Col>
      <Col span="18">
        <Input v-model="value.val" placeholder="请输入..." />
      </Col>
    </Row>

    <!-- action -->
    <Row>
      <Col span="4" class="text-left">动作</Col>
      <Col span="20">
        <Select v-model="action">
          <Option value="POST">POST</Option>
          <Option value="GET">GET</Option>
          <Option value="DELETE">DELETE</Option>
        </Select>
      </Col>
    </Row>
    <br>

    <!-- 确定按钮 -->
    <Row>
      <Col span="24">
        <Button type="primary" long @click="clickOk">确定</Button>
      </Col>
    </Row>

    <!-- curl -->
    <Row>
      <Col span="24" class="text-left text-gray">
        Curl命令
      </Col>
    </Row>
    <Input v-model="curlStr" type="textarea" :autosize="true"></Input>
  </div>
</template>

<style scoped>
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
.text-left{
  text-align: left;
  height: 32px;
  line-height: 32px;
}
.text-gray{
  color: #bbb;
}
</style>

<script>
// import $ from 'jquery'

export default {
  name: 'onos-params-selecter',
  props: ['currOnosOpera'],
  data: function () {
    return {
      all: {
        devOnline: {id: {name: 'id', label: '设备ID', val: '', selected: false}, ip: {name: 'ip', label: 'IP', val: '', selected: false}},
        createVr: {id: {name: 'id', label: 'VR_ID', val: '', selected: false}},
        createDvs: {id: {name: 'id', label: 'DVS_ID', val: '', selected: false}}
      },
      nodeIp: '',
      urlSuffix: '',
      params: {},
      action: '',
      user: 'karaf',
      passwd: 'karaf'
    }
  },
  watch: {
    // currOnosOpera改变导致params变化
    currOnosOpera: function (val) {
      this.getParams(val, this.all)
    }
  },
  computed: {
    // 通过params计算得出apiBody
    apiBody: function () {
      return this.getApiBody()
    },
    // 通过nodeIp和urlSuffix计算得出urlStr
    urlStr: function () {
      return this.getUrl()
    },
    // 通过apiBody和urlStr和action计算得出curlStr
    curlStr: function () {
      return this.getCurl()
    }
  },
  methods: {
    // *** 内部计算使用方法 ***

    // 传入已选onos操作:opera,传入所有操作对应参数：data,获取已选onos操作相应的参数
    getParams: function (opera, data) {
      let operaParamObj = data[opera]
      this.params = operaParamObj
    },
    getApiBody: function () {
      let currParams = this.params
      let rlt = '{'
      for (let key in currParams) {
        if (currParams[key].selected) {
          rlt = rlt + '"' + currParams[key].name + '":"' + currParams[key].val + '",'
        }
      }
      if (rlt !== '{') {
        return rlt.substring(0, rlt.length - 1) + '}'
      }
      return rlt + '}'
    },
    getUrl: function () {
      let rlt = ''
      rlt = 'http://' + this.nodeIp + ':8181/onos/v1/sangfor' + this.urlSuffix
      return rlt
    },
    getCurl: function () {
      let act = this.action
      let api = this.apiBody
      let url = this.urlStr
      if (act !== '' && this.nodeIp !== '' && this.urlSuffix !== '' && url !== '') {
        let rlt = ''
        rlt = 'curl -w %{http_code}"\\n" -X ' + act + ' --header \'Content-Type:application/json\' --header \'Accept:application/json\' --user onos:rocks -d \'' + api + '\' \'' + url + '\' -s'
        return rlt
      }
    },

    // *** 事件方法 ***

    // 确定按钮点击事件方法
    clickOk: function () {
      let method = this.action
      let url = this.urlStr
      let body = this.apiBody
      console.log('method:' + method + ',url:' + url + ',body:' + body)
    },

    // *** 发送请求 ***

    // 创建xmlhttprequest对象
    createXMLHttpRequest: function () {
      let xmlhttp = null
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
      }
      if (xmlhttp !== null) {
        return xmlhttp
      } else {
        console.log('Your browser does not support XMLHTTP.')
        return null
      }
    },
    // 使用XMLHttprequest对象进行发送请求
    sendRequest: function (method, url, body, asyns, username, password) {
      asyns = (asyns === undefined) ? 'true' : asyns
      username = (username === undefined) ? this.user : username
      password = (password === undefined) ? this.passwd : password

      let xmlhttp = this.createXMLHttpRequest()
      xmlhttp.open(method, url, asyns, username, password)
      if (method === 'POST') {
        xmlhttp.setRequestHeader('Content-type', 'application/json')
        xmlhttp.setRequestHeader('Accept', 'application/json')
      } else if (method === 'GET' || method === 'DELETE') {
        body = 'null'
        xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xmlhttp.setRequestHeader('Accept', 'application/json')
      }
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === '1') console.log('1')
        if (xmlhttp.readyState === '2') console.log('2')
        if (xmlhttp.readyState === '3') console.log('3')
        if (xmlhttp.readyState === '4') {
          console.log('status:' + status)
        }
      }
      console.log('method:' + method + ',url:' + url + ',body:' + body + ',asyns:' + asyns + ',user:' + username + ',pswd:' + password)
      xmlhttp.send(body)
      console.log('end')
    }
  }
}
</script>
