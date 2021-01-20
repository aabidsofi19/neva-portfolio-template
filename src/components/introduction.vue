<template>
<v-container class="mt-10 ">
    <div id='intro' class="intro text-uppercase
        text-centre white--text mono">
     <h1 class='mono intro'> 
        <span class='mono'>
            Hello
        </span>

        <span>            
            I am
        </span>

        <span>
            Aabid Sofi
        </span>

        <span>
            Software Engineer And 
            Web developer.
        </span>
    </h1>
            <v-btn icon color='#66fcf1' 
                large
                to='/#about-me'
                class ='mt-10'>
            <v-icon>
                mdi-chevron-double-down
            </v-icon>
        </v-btn>
        
     </div>
</v-container>
</template>

<script>
    export default { 
        name: 'introduction',components: {

        } ,
        methods:{
            }
    }
</script>

<style scoped>
.intro {
    font-family:'DM Mono', monospace ;
    margin:auto;
    font-size: 1.6rem;
   text-align: center;
    padding-top:10%;
}

h1 > span:first-child{
    margin-bottom: -20px;
    font-size:5rem;
    font-weight: bold;
    color:#66FCF1 ;
    display: block;
    letter-spacing: -2px;
}
h1 >span:nth-of-type(2){
    font-weight: bold;
    color:White;
}
h1>span:nth-of-type(3){
    font-weight: bold;
    color: #45A29E;
}
h1>span:nth-of-type(4) {
    display: block;
    color:white;
    
}
</style>
