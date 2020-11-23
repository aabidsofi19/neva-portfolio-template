import Vue from 'vue';
import Router from 'vue-router';
import homePage from '@/components/homePage.vue';
import cart from '../components/cart.vue';
import checkout from '../components/checkout.vue';
import customCheckout from '../components/custom-checkout.vue';
Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    title: 'home',
    component: homePage,
  },
  {
    path:'/cart',
    name:'cart',
    component:cart,
  },
  {
    path:'/checkout',
    name:'checkout',
    component:checkout


  },
  {
    path:'/custom-checkout',
    name:'custom-checkout',
    component:customCheckout
  }


  
];

export default new Router({
    mode:'history',
    routes,
});
