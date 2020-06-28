import Vue from 'vue'
import http from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    updateUser (state, user) {
      state.user = user
    }
  },
  actions: {
    updateUserData ({ commit }) {
      return new Promise((resolve) => {
        http.get('/users/me', { baseURL: '/api' })
          .then((res) => {
            commit('updateUser', res.data.user)
          })
          .catch((err) => { console.log(err) })
          .finally(() => {
            resolve()
          })
      })
    }
  },
  getters: {
    getUser (state) {
      return state.user
    }
  },
  modules: {
  }
})
