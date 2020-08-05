import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '../store/index'
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
    // meta: { requiresAuth: true },
    // beforeEnter: (to, from, next) => {
    //   if (store.getters.getUser.firstAccess) {
    //     next()
    //   } else {
    //     next({
    //       path: '/user/first'
    //     })
    //   }
    // },
    component: () => import(/* webpackChunkName: "user" */ '../views/UserHome.vue')
  }, {
    path: '/user/first',
    name: 'FirstLogin',
    // meta: { requiresAuth: true },
    // TODO: Add before enter to verify if needs to fill something
    component: () => import(/* webpackChunkName: "first" */ '../views/FirstLogin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.getUser) {
      next()
    } else {
      next({ path: '/' })
    }
  } else {
    next();
  }
})

export default router
