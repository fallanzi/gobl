import Vue from 'vue'
import Router from 'vue-router'
import UsersList from '@/components/UsersList'
import Home from '@/components/Home'
import Post from '@/components/Post'
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
    path: '/post/:id',
    name: 'Post',
    component: Post,
  },
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
