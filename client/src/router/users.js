import Vue from 'vue'
import Router from 'vue-router'
import Backend from '@/components/Backend'

Vue.use(Router)
const road = {
  path: '/backend',
  name: 'Backend',
  component: Backend,
}

export default new Router({
  mode: 'history',
  road,
})
