<template>

    <v-app id='home-page'>
         
        <offer/>
        <banner :imgSrc=" 'https://img.freepik.com/free-photo/woman-with-shopping-bags-studio-yellow-background-isolated_1303-14294.jpg?size=626&ext=jpg&uid=R23222072&ga=GA1.2.1499567624.1604513624'"/>
        <categories/>
        <welcome/>
    
        
    <!------------------------------------------------============slider categories  ====================-------------------------------------------------->

     
    
     <productsGrid/>
     </v-app>

</template>

<script>
//import navbar from './navbar.vue';
import banner from './Imgbanner.vue';
import categories from './categoriesscroller.vue';
import productsGrid from './productsGrid.vue';
import welcome from './welcome.vue';
import offer from './offer.vue'; 
//let h = document.getElementById('nav').clientHeight;
let h='hh';
    export default { 
        name: 'homePage',
        components: {
            
            banner,
            categories,
            productsGrid,
            welcome,
            offer

        },

        data: () => ({
             model: null,
             h:h
         }),
       // computed:{
        //setmargin(){
            
            
          //  return{
            //    "margin-bottom":this.h+'%',
           // }

        //}
       // }

    }    
</script>

<style scoped lang="css" >
#home-page{
background-color:#FDF8F5;
}
#cat{
margin-top:0%;
}
</style>
