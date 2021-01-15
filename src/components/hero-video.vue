<template>
    <v-container class='pa-0 ma-0 hero' app>
        <video  plays-inline autoplay muted loop class='background-video'>
            <source src="https://res.cloudinary.com/dh3azc5sk/video/upload/c_limit,w_480/v1601656756/mosaic_krlmf3.mp4" type='video/mp4'>
                
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
    width: 100vw;
    height: 80vh;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
}
 </style>
