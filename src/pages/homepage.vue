<template>
    <v-container fluid class='homepage ma-0 pa-0' app >
        <navigation id='nav'></navigation>
        <heroVideo></heroVideo>
        <introduction class='intro'></introduction>
        <aboutMe></aboutMe>
        <portfolio></portfolio>
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
    export default { 
        name: 'homepage',components: {
            navigation,
            heroVideo,
            introduction,
            aboutMe,
            portfolio,
            contact,
            myFooter

        } 
    }    
</script>

<style scoped >
.homepage{
    background-color: #1F2833;
}
#nav{
    position: fixed;
    z-index: 4;
}
.intro {
    height:80vh;
    position: relative;
    margin-top:10px;
    z-index: 2;
}


</style>
