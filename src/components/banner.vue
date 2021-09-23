<template>
    <div class="banner d-flex flex-column justify-center align-items-center  ">
          
          <div class="intro">
            <h1 class="heading"> Neva Portfolio </h1>
            <h2 class="secondary-text"> Minimal and <span> Modern </span> theme for Portfolios and Landing pages </h2>
            <v-btn color="accent" outlined class="btn my-8">
                View more 
            </v-btn>
          </div>
    </div>
</template>


<script>
export default {
    name:"banner"
}
</script>


<style lang="scss" >
    .banner {
        text-align: center;
        height:100vh;
        width:100vw;
        background-color: var(--main-bg-color);
    }
    
    .secondary-text{
        color: var(--gray) ;
    }

    .heading {
        font-size: 4em ;
        color : var(--highlight-color);
    }

    .intro{
       span{
           color : var(--dark-accent);
       }

       .btn{
           color: var(--gray);
       }
    }


</style>