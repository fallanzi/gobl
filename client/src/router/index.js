import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Backend from '@/components/Backend'

import Login from '@/components/auth/Login'

import Post from '@/components/posts/Post'
import CategoryAdd from '@/components/posts/CategoryAdd'
import PostAdd from '@/components/posts/PostAdd'

import About from '@/components/includes/About'
import Contacts from '@/components/includes/Contacts'
import Realisations from '@/components/includes/Realisations'

Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/backend',
    name: 'Backend',
    component: Backend,
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
    path: '/categories',
    name: 'CategoryAdd',
    component: CategoryAdd,
  },
  {
    path: '/posts',
    name: 'PostAdd',
    component: PostAdd,
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
]

export default new Router({
  mode: 'history',
  routes,
});
