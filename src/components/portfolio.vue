<template>
    <v-container fluid class='ma-0 portfolio' id='portfolio'>
        <h2 class='page-title pa-2 text-uppercase cormorant'
            >
            Portfolio
        </h2>
        <v-container fluid class="projects pa-4">
            <v-row align="center"
                justify="center" v-for='(chunk,index) in projectChunks'
                :key ='index'>
                <v-column v-for='project in chunk' :key='project.img'
                    columns='12'
                    sm='6'>
                    <v-hover v-slot='{hover}'>
                       <v-card
                          
                          class='mb-4 ml-1 grey'
                          elevation="2"
                          round
                        >
                          <v-img :src='project.img'
                              width='300px'     
                              height='240px'>
                              <v-expand-transition>
                              <div
                                v-if="hover"
                                class="d-flex flex-column transition-fast-in-fast-out orange darken-2 v-card--reveal  white--text pa-3 justify-center align-center"

                                style="height: 100%;"
                              >
                                <span class='my-2  cormorant ' id='project_name'  > 
                                {{project.name}}
                                </span>
                                <span class='mono description '>
                                 {{ project.description }}
                                </span>
                                <v-btn flat v-if='project.url'  
                                 :href='project.url' target='_blank'
                                 tile width='50%' class='mx-auto my-1 mt-2 '> Visit</v-btn>
                                <div class='tech-icons d-flex flex-row flex-wrap' width='100%'> 
                                   <v-img :src="icon_path(tech)"
                                   width='30px'  contain  
                                   class='mx-2' id='tech-icon'
                                   v-for='tech of project.tech_stack'
                                   :key='tech'>
                                      
                                   </v-img>
                                
                            
                                </div>
                              </div>
                              </v-expand-transition>
                                    
                          </v-img>
                        </v-card>
                     </v-hover>

                 </v-column>
            </v-row>
         </v-container>
    </v-container>
</template>

<script>
    export default { 
    name: 'portfolio ',components: {

    } ,
    mounted(){
        this.$store.dispatch('getProjects')
    },
    data () {
      return {
            
      }
    },
    computed:{
        projectChunks(){
            return this.$store.getters.projectChunks
        },
        
    },
   methods:{
       icon_path(tech){
           console.log(tech)
            return require(`../assets/${tech.toLowerCase()}.png`)
       }
    }

}    
</script>

<style scoped>
.portfolio{
}
.projects{
    
    margin:auto;
    text-align: center;
    overflow: hidden;
    /*width: 45vw;
    height: 30vh;
    max-height: 60vh;
    max-width:95vw;*/
}
.portfolio>h2{
    
    color:#66f2f1;
    font-size:32px;
    font-weight: bold;
    text-align: center;
}
.page-title:after {
    content: ""; /* This is necessary for the pseudo element to work. */ 
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto; /* This will center the border. */
    width: 30%; /* Change this to whatever width you want. */
    padding-top:2px; /* This creates some space between the element and the border. */
    margin-bottom: 8px;
    border-bottom: 5px solid #f2f2f2; /* This creates the border. Replace black with whatever color you want. */
}

#description{
  font-size:18px;
}
#project_name{
 font-size:28px;
}
.tech-icons{
    position: absolute;
    
    justify-content: space-around;
    padding:1px;
    margin:2px;
    bottom: 0px;

}
</style>
