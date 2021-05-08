<template>
    <v-container fluid class='homepage ma-0 pa-0' app >
        <navigation id='nav'></navigation>

        <heroVideo></heroVideo>
        <introduction class='intro'></introduction>
        <aboutMe></aboutMe>

        <divider></divider>
        <portfolio></portfolio>

        <divider></divider>

        <contact></contact>
        <myFooter></myFooter>
    
        

    </v-container>
</template>

<script>
    import heroVideo from '../components/hero-video.vue'
    import introduction from '../components/introduction.vue'
    import aboutMe from '../components/about-me.vue'
    import portfolio from '../components/portfolio.vue'
    import contact from '../components/contact.vue'
    import myFooter from '../components/footer.vue'
    import navigation from '../components/navigation.vue'
    
    import divider from '../components/divider.vue'
    export default { 
        name: 'homepage',components: {
            navigation,
            heroVideo,
            introduction,
            aboutMe,
            portfolio,
            contact,
            myFooter,
            divider

        } 
    }  
      
</script>

<style scoped >
.homepage{
    background-color:  #ffff;
}
#nav{
    position: fixed;
    z-index: 4;
}
.intro {
    height:35rem;
    min-height:90vh;
    width: 100%;
    overflow: hidden;
    position: relative;
    /*margin-top:; */
    z-index: 2;
}


</style>
