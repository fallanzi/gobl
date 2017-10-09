import Vue from 'vue';
import Router from 'vue-router';
import UsersList from '@/components/UsersList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/users/list',
      name: 'UsersList',
      component: UsersList,
    },
  ],
});
