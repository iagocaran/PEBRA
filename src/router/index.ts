import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/user',
    name: 'UserHome',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "user" */ '../views/UserHome.vue')
  }, {
    path: '/user/first',
    name: 'FirstLogin',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "first" */ '../views/FirstLogin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
