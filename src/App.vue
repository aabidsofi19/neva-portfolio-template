<template>
  <v-app>
      <navbar id= 'nav'  />
      
        
      <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid class='ma-0 pa-0'>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>
      

  </v-app>
</template>

<script>

import navbar from './components/navbar.vue';
//import banner from './components/Imgbanner.vue';
//import categories from './components/categoriesscroller.vue';
//import productsGrid from './components/productsGrid.vue';
//import homePage from './components/homePage.vue'
export default {
  name: 'App',
  
  components: {
    navbar
     },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');/*sans-serif*/
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');/*serif*/

</style>



