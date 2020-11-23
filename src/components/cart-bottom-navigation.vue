<template>
<footer class="navigation">
  <v-bottom-navigation v-model="value" 
     fixed
     horizontal 
     hide-on-scroll
     app>
    <router-link to='custom-checkout'>
    <v-btn value="recent">
      <span>Checkout</span>

      <v-icon></v-icon>
    </v-btn>
    </router-link>

    <v-btn value="favorites">
      <span>Favorites</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span>Nearby</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</footer>
</template>
<script>
  export default {

    name:'cartBottomnavigation',
    data: () => ({ value: 'recent' }),
  }
</script>
<style scoped>
.navigation{

    padding: 0px;

}
</style>
