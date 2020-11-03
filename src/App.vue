<template>
  <v-app>
      <navbar/>
      <categories/>
      <banner/>
      <productsGrid/>
      <categories/>
  </v-app>
</template>

<script>

import navbar from './components/navbar.vue';
import banner from './components/Imgbanner.vue';
import categories from './components/categoriesscroller.vue';
import productsGrid from './components/productsGrid.vue';

export default {
  name: 'App',
 
  components: {
      navbar,
      banner,
      categories,
      productsGrid
  },

  data: () => ({
    //
  }),
};
</script>
