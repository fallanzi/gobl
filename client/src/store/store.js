import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable */

const store = new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false,
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser: (state, user) => {
      state.user = user
    },
  },
  actions: {
    setTokenAct: ({ commit }, token) => {
      commit('setToken', token)
    },
    setUserAct: ({ commit }, user) => {
      commit('setUser', user)
    },
  },
})

export default store
