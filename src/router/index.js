import Vue from 'vue';
import Router from 'vue-router';
import homePage from '../pages/homepage.vue'
Vue.use(Router);

const routes = [
 {
    path: '/',
    name: 'home',
    title: 'home',
 component: homePage,
 },
  
  
];

export default new Router({
    mode:'history',
    scrollBehavior: function(to,) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior:'smooth'
            }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes,
});
