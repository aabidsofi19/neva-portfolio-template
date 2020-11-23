<template>
<div id="welcome">
<v-carousel v-model="model" 
      :continuous="false"
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiters
      height='58vh'>
    <v-carousel-item
      v-for=" color in  4"
      :key="color"
      height="58vh" 
      >
        <v-img 
              id='modelimg'
            
            contain  
            max-height="100%"
            max-width="100%"
              
           :src="require('../assets/mega-sales-banner.jpg')"
 
              > 
              <v-btn 
                  flat
                  color='white'
                  elevation="0"
                  outlined
                  style="position:absolute;margin-top:70%;margin-left:auto;margin-right:auto;">
                check in
              </v-btn>

        </v-img>  
   
      
    </v-carousel-item>
  </v-carousel>

</div>

</template>

<script>
    export default { 
        name: 'welcome',components: {

        },
        data: () => ({
            model: 0,
     
         }),
    }    
</script>
<style scoped lang='css'>
#welcome{
margin-top: 11vh;
}
#blob{
/*background-image: url(../assets/blob.svg);
background-image:linear-gradient(to right, #DDAF94 , #);*/
background-size:cover ;
}
#modelimg{

padding: 10%;}
</style>
