<template>
    <v-container fluid class='homepage ma-0 pa-0' app >
        <navigation id='nav'></navigation>

        <banner/>
        <divider></divider>
        <portfolio></portfolio>

        <divider></divider>

        <contact></contact>
        <myFooter></myFooter>
    
        

    </v-container>
</template>

<script>
    import banner from "../components/banner.vue"
    import portfolio from '../components/portfolio.vue'
    import contact from '../components/contact.vue'
    import myFooter from '../components/footer.vue'
    import navigation from '../components/navigation.vue'
    
    import divider from '../components/divider.vue'
    export default { 
        name: 'homepage',components: {
            navigation,
            banner,
            portfolio,
            contact,
            myFooter,
            divider

        } 
    }  
      
</script>

<style scoped >


</style>
