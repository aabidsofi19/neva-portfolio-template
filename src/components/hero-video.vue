<template>
    <v-container class='pa-0 ma-0 hero' app>
        <video  plays-inline autoplay muted loop class='background-video'>
            <source src="https://res.cloudinary.com/dh3azc5sk/video/upload/v1610788781/Lines_-_4760_cmxlsb.mp4" type='video/mp4'>
                
        </video>                 
    </v-container>
</template>

<script>
    export default { 
        name: 'heroVideo',components: {

        } 
    }    
</script>

<style>


.background-video{
    object-fit: cover;
    width: 100%;
    height: 35rem;
    min-height: 20rem;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
}
 </style>
