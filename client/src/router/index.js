import Vue from 'vue';
import Router from 'vue-router';
import Ping from '../components/Ping.vue';
import HelloWorld from '../components/HelloWorld.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
  ],
});
