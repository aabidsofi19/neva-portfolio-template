<template>
<div class="banner">
    <v-card  
         tile
         elevation="0"
         height='70vh'
         width='100%'
    >
        <v-img 
             id="bannerImg" 
             
             width='100%' 
             height='100%'
             :src='imgSrc'
             alt='sale '
             >   
                <div class="hero-heading">
                    <p>
                        <span> wear what you live</span><span> </span><span>So Low, So Good, Its Going</span>
                    </p>
                    <v-btn
                         class="ma-2"
                         elevation='0'
                         tile
                         color="#266150"
                     >
                         EXPLORE
                     </v-btn>
                </div>
            
        </v-img>
    </v-card>

</div>
</template>
<script>
    export default { 
        name: 'banner',
        props:['imgSrc'],
        components: {

        } 
    }    
</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
    #banner{
        margin:0px;
        padding:0px

    }
    #bannerImg p{
        text-align: center;
        margin:auto;


    }

    .hero-heading{
        margin-top: 60%;
        padding: 10px;

    }
    .hero-heading p span:nth-child(1){
        font-family: 'Ubuntu', sans-serif;
        text-transform: uppercase;
        color:white;
        font-weight: bold;
        font-size:30px;
    }
    .hero-heading p span:nth-child(2){
        display: hidden;
        color:red;
        font-weight: bold;
        font-size:28px;
    }
    .hero-heading p span:nth-child(3){
        font-family: 'Handlee', cursive;
        display: block;
        color:#FDF8F5;
        font-weight: italic;

        
        font-size:29px;
    }



</style>
