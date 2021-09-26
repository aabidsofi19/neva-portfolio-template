<template>
    <v-container fluid class='ma-0 portfolio' id='portfolio'>
        <h2 class=''>
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
                          class='mb-4 ml-1 grey project'  elevation="2"   round  >

                          <v-img :src='project.img'  width='500px'  height='340px' >
                               <!--' -->
                              <v-expand-transition>
                                <div
                                    v-if="hover" style="height: 100%;"
                                    class="d-flex flex-column transition-fast-in-fast-out  red darken-2 v-card--reveal  white--text pa-3 justify-center align-center card-reveal" >
                                    <span class='my-2  mono' id='project_name'  > 
                                        {{project.name}}
                                    </span>
                                    <span class=' montserrat description '>
                                        {{ project.description }}
                                    </span>
                                    <v-btn flat v-if='project.url'  
                                    :href='project.url' target='_blank'
                                    tile width='50%' class='mx-auto my-1 mt-2 '> 
                                        Visit
                                    </v-btn>
                                    <div class='tech-icons d-flex flex-row flex-wrap' width='100%'> 
                                        <v-img :src="icon_path(tech)"
                                            width='30px'  contain    class='mx-2' id='tech-icon' v-for='tech of project.tech_stack' :key='tech'>                                           
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
        // this.$store.dispatch('getProjects')
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

.projects{
    
    margin:auto;
    padding: 5%;
    text-align: center;
    overflow: hidden;
    /* width: 33em;
    min-width: 100vw;   */
    /* height: 30vh; */
    /* max-height: 60vh; */
    /* max-width:95vw; */
}

.project{
  width: 30vw;
  min-width:25rem;
  height:auto;
  margin:2%;
  margin-left:12px;
  margin-right:12px;

}


.portfolio>h2{

    padding-left: 9%;
    text-transform: uppercase;
    font-weight: bold;
    color:var(--accent-color);
    padding-block:10;
    text-align: center;
    padding-block: 6%;
    font-size:2em;
    
    
}/*  */


.card-reveal{
    opacity: 0.85;
}
#description{
  font-size: 18px;
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
