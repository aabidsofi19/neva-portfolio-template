<template>
    <v-footer ref='footer' paddless default class='footer black'>
        <v-btn icon @click='scrolltop' color='#66fcf1' class='up' tile>
            <v-icon>
                mdi-chevron-double-up
            </v-icon>
        </v-btn>
        <v-container fluid class="social-icons" 
            >
            <v-btn icon color='#f1f1f1' class='d-inline-block icon'
                tile v-for='icon in icons ' :key='icon'>
                <v-icon class=''>
                    {{icon}}
                </v-icon>
                
            </v-btn>
            <p class='mono copyright'>AABID SOFI 
                <span>
                    <v-icon color='#f88379' class='copyright-icon my-auto' size='16px'>
                        mdi-copyright 
                    </v-icon>2020
                </span> 
            </p>
        </v-container>
    </v-footer>
</template>
<script>
    export default { 
        name: 'myFooter',components: {

        },
        data(){
            return{
                icons:['mdi-facebook','mdi-linkedin','mdi-github','mdi-instagram']
            }
            
        },
        methods:{
            scrolltop(){
                this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
            }

        }
    }    
</script>
<style scoped>

.up{
    height:40px;
    background-color: #ff2400;
    margin-left: 45%;
    margin-top:-18px;
    
}
.social-icons {
    text-align: center;
    padding:auto;
}
.icon {
    background-color: #414a4c;
    margin:20px;
}

.copyright{
    font-size:16px;
    text-align: center;
    color:#414a4c;
    font-weight:bold;
}      
.copyright>span{
    color:#f88379;
}
.copyright-icon{
    
}
</style>
