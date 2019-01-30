import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Game
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
