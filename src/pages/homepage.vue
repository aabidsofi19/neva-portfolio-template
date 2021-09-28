<template>
    <v-container fluid class='homepage ma-0 pa-0' app >
        <navigation id='nav'></navigation>

        <banner/>
        <services/>
        <about/>
        <portfolio></portfolio>
        <contact></contact>
        <myFooter></myFooter>

        <!-- <divider></divider>
       
        <divider></divider>

       
        
     -->
        

    </v-container>
</template>

<script>
    import banner from "../components/banner.vue"
    import services from "../components/services.vue"
    import about from "../components/about.vue"
    import portfolio from '../components/portfolio.vue'
    import contact from '../components/contact.vue'
    import myFooter from '../components/footer.vue'
    import navigation from '../components/navigation.vue'
    
    // import divider from '../components/divider.vue'
    export default { 
        name: 'homepage',components: {
            navigation,
            banner,
            services,
            about,
            portfolio,
            contact,
            myFooter,
            // divider

        } 
    }  
      
</script>

<style scoped >
#nav{
    position: fixed;
    z-index: 4;
}


</style>
