import Vue from 'vue'
import VueRouter from 'vue-router'

import OnosHelper from '@/components/layout-content/onos-helper'
import DevHelper from '@/components/layout-content/dev-helper'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/onos-helper',
      component: OnosHelper
    },
    {
      path: '/dev-helper',
      component: DevHelper
    }
  ]
})
