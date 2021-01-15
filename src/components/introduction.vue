<template>
<v-container class="mt-10 ">
    <div ref='intro' class="intro text-uppercase
        text-centre white--text mono">
        
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
            <v-btn icon color='#66fcf1' 
                large
                @click='scrolldown()'
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
            scrolldown(){
                console.log('hi');}
                
    },
    }
</script>

<style scoped>
.intro {
    margin:auto;
    margin-top: 30%;
    font-size: 1.6rem;
    text-align: center;
}
div > span:first-child{
    margin-bottom: -20px;
    font-size:5rem;
    font-weight: 900;
    color:#66FCF1 ;
    display: block;
    letter-spacing: -2px;
}
div >span:nth-of-type(2){
    font-weight: bold;
    color:White;
}
div>span:nth-of-type(3){
    font-weight: bold;
    color: #45A29E;
}
div>span:nth-of-type(4) {
    display: block;
    color:white;
    
}
</style>
