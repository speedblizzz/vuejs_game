import Vue from 'vue'
import Router from 'vue-router'
import TheGame from '@/components/TheGame'
import TheSettings from '@/components/TheSettings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Game',
      component: TheGame
    },
    {
      path: '/settings',
      name: 'Settings',
      component: TheSettings
    }
  ]
})
