import Vue from 'vue'
import Router from 'vue-router'
import UsersList from '@/components/UsersList'

import Home from '@/components/Home'
import Login from '@/components/Login'
import Post from '@/components/Post'
import CategoryAdd from '@/components/CategoryAdd'


import About from '@/components/About'
import Contacts from '@/components/Contacts'
import Realisations from '@/components/Realisations'

Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/account/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post,
  },

  /**
   * Backend Pages
   */

  {
    path: '/categories/add',
    name: 'CategoryAdd',
    component: CategoryAdd,
  },


  /**
   * Static Pages
   */
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/realisations',
    name: 'Realisations',
    component: Realisations,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/users/list',
    name: 'UsersList',
    component: UsersList,
  },
]

export default new Router({
  mode: 'history',
  routes,
});
