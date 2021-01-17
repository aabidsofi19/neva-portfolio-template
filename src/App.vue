<template>
  <v-app>
      <homepage id='h' app>
      </homepage>

  </v-app>
</template>

<script>
import homepage from './pages/homepage.vue'
export default {
  name: 'App',
  
  components: {
      homepage
    
     },

  data: () => ({
    //
  }),
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');/*serif*/
@import url("https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,700");
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&display=swap");

body{
    font-family: 'Khula', sans-serif;
}
.mono{
  font-family: "DM Mono", Monospace;
  
  font-weight: bold;
}



h1, h2, h3, h4, h5, h6 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400;
}

.cormorant{
    font-family: 'Cormorant Garamond', serif;
    font-weight: 700;
    font-size: 13px;
    
}
</style>



