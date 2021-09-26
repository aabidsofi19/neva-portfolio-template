<template>
    <v-container id="services">
        <v-row >

           <v-col class="" xs="12" sm="12"  md="4"> 
               <h2 id="title"> My Services </h2> 
            </v-col>
           
           <v-col class="service-names " xs="12"  sm="12" md="4">
              <p> Branding</p>
              <p>  Ui | Ux</p>
              <p>  Designing </p>
           </v-col>

           <v-col class="service-names " xs="12"  sm="12" md="4" >
               <p>Photoshop</p>
              <p> Branding</p>
              <p> Seo </p>
           </v-col>

        </v-row>
    </v-container>
</template>


<script>
export default {
    name:"services",
}
</script>

<style lang="scss" scoped >
    $small: 300px;
    $medium: 900px;

   #services {
       padding: auto;
       margin: auto;
       height:auto;
       background-color : white;

       #title{
        //    width:100vw;
           text-transform: uppercase;
           font-weight: bold;
           color:var(--accent-color);
           padding-top:15px;

       }
       
     
       @media  screen and (min-width:$small) {
          padding:10%;

          #title {
              width: 100vw;
          }
           
        //    background-color:red;
       }

       @media  screen and (min-width:$medium) {
           padding-block: 10%;
           padding-left:15%;
        //    background-color:red;
       }

       .service-names{
           
           margin-inline: 0px;
           p{  
               font-family: var(--secondary-font);
               font-size:3em;
               color:var(--main-bg-color);
               transition: font-size 0.3s ease-in-out;
           }

           p:hover {
               color:var(--gray);
               font-size: 3.3em;
               font-weight: medium;

           }
       }

   }
</style>