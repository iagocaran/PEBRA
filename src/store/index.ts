import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: -1,
    users: [
      { name: "Bob", email: "bob@mail.com", password: "1234" },
      { name: "Alice", email: "a@a", password: "a"}
    ]
  },
  mutations: {
    updateUser (state, user) {
      Object.assign(state.users[state.user], user)
    },
    createUser (state, user) {
      state.users.push(user)
    },
    login (state, credentials) {
      state.user = state.users.findIndex(e => e.email == credentials.email && e.password == credentials.password)
      return state.user >= 0
    }
  },
  actions: {

  },
  getters: {
    getUser (state) {
      return state.user >= 0 ? state.users[state.user] : null
    }
  },
  modules: {
  }
})
