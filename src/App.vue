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

@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
body{
    font-family: 'Khula', sans-serif;
}

.mono{
  font-family: "DM Mono", Monospace;
  font-weight: bold;
}

.montserrat{
  font-family: 'Montserrat', sans-serif;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>



