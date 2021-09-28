import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
//import Vuex from "vuex";
import router from './router';
import store from "@/store";


new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')


