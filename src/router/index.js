import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import { routerMode } from '@/util/env'

Vue.use(Router)

export default new Router({
  mode: routerMode,
  routes: [
    {
      path: '/',
      name: '饿了吗',
      component: Index
    }
  ]
})
