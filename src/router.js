import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Sort from './views/Sort.vue'
import Shopping from './views/Shopping.vue'
import Center from './views/Center.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sort',
      name: 'sort',
      component: Sort
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    {
      path: '/center',
      name: 'center',
      component: Center
    },
  ]
})
