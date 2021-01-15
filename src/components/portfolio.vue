<template>
    <v-container fluid class='ma-0 portfolio'>
        <h2 class='page-title pa-2 text-uppercase cormorant'
            >
            Portfolio
        </h2>
        <v-container fluid class="projects pa-4">
            <v-row align="center"
      justify="center">
                <v-column v-for='item in items' :key='item.src'
                    columns='12'
                    sm='6'>
                        <v-card
                          
                          class='mb-4 ml-1 grey'
                          elevation="2"
                          round
                        >
                        <v-img :src='item.src'
                            width='300px'     
                            height='240px'>
                            
                            
                            
                        </v-img>
                        </v-card>
                    
                               
                </v-column>
                    </v-row>
                </v-container>
            </v-container>
        </template>

        <script>
            export default { 
            name: 'portfolio ',components: {

            } ,
            data () {
              return {
                items: [
              {
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc07deu94DwzBJyiEdlhzsCB-hCYbPK1GitA&usqp=CAU',
              },
              {
                src:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc07deu94DwzBJyiEdlhzsCB-hCYbPK1GitA&usqp=CAU',
              },
            
            ],
          }
        },
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
</style>
