import Api from './Api'
// import Vue from 'vue'
// import VueResource from 'vue-resource'

// Vue.use(VueResource)

export default {
  // register(credentials) {
  //   return Api().post('register', credentials)
  // },
  login(credentials) {
    return Api().post('login', credentials)
  },
}
