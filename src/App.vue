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

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
:root{

  --main-bg-color :#1a1a1d;
  --gray : #4e4e50;
  --highlight-color : #950740;
  --accent-color:#c30734;
  --dark-accent : #6f2232;
  --primary-font : 'Montserrat', sans-serif;
  --secondary-font :  'Work Sans', sans-serif; 
}

.work-sans{
  font-family: 'Work Sans', sans-serif;
  
}

.montserrat{
  font-family: 'Montserrat', sans-serif;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
 font-family: 'Work Sans', sans-serif;
 font-weight: 300;
}

h1, h2, h3, h4, h5, h6 {
 font-family: 'Montserrat', sans-serif;
 font-weight: 900;
}
</style>



