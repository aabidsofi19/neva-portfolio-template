<template>
<div class="banner">
    <v-card  
         tile
         elevation="0"
    >
        <v-img 
             id="bannerImg" 
             :aspect-ratio="16/9"
             :width="width"
             src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        >
            <p>
                 this is a sale h
            </p>
            <p>
                hi
            </p>
        </v-img>
    </v-card>

</div>
</template>
<script>
    export default { 
        name: 'banner',
        //props:[src,text],
        components: {

        } 
    }    
</script>

<style scoped lang="css">
    #bannerImg p{
        text-align: center;
        margin:auto;


    }

</style>
