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
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      if (store.getters.getUser.firstAccess) {
        next()
      } else {
        next({
          path: '/user/first'
        })
      }
    },
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

async function authenticated () {
  const token = document.cookie.search('token');
  if (Object.keys(store.getters.getUser).length === 0)
    await store.dispatch('updateUserData')
  return token >= 0;
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authenticated()) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next();
  }
})

export default router
