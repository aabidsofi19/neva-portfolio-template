<template>
    <v-container class="d-flex align-center justify-center ">
        <div id='intro' class="intro text-uppercase
            white--text mono d-flex flex-column justify-center align-center">
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
                    Software Engineer And Web developer.
                </span>
            </h1>
            <v-btn  icon color='#66fcf1' 
                    large to='/#about-me' class ='mt-10 '>
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
    font-size: calc(1.5rem + 2.5vw);
    text-align: left;
    padding-left:4%;
    padding-right: 4%;
}

h1 > span:first-child{
    
    font-size: calc(4rem + 5vw);
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
