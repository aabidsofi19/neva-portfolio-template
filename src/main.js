import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
//import Vuex from "vuex";
import router from './router';
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import VueApollo from "vue-apollo";
import { onError } from "apollo-link-error";

Vue.use(VueApollo)
//Vue.use(VueRouter)

//Vue.use(Vuex);
//appolo error
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        )
    if (networkError) console.log(`[Network error]: ${networkError}`)
})
//apollo config
 // Create an http link:
const link = new HttpLink({
    uri: 'http://localhost:8000/graphql/',
   fetch,
  // headers: getHeaders()
 });
const client = new ApolloClient({
   link: errorLink.concat(link),
   cache: new InMemoryCache({
     addTypename: true
   })
 });
Vue.config.productionTip = false

const apolloProvider = new VueApollo({
    defaultClient: client,
  })

new Vue({
  router,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
