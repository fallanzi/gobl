// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import App from './App'
import router from './router/index'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Vuex)
Vue.http.options.emulateJSON = true
// Vue.http.options.root = ''

/* eslint-disable */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})

// new Vue({
//   el: '#back',
//   users,
//   // store,
//   template: '<Back/>',
//   components: { Back },
// })
