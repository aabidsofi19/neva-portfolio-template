<template>
    <div id="about"> 
      <v-row>
          <v-col class="col-xs-12">
            <!-- add your personal bio paragraphs here in this column -->
            
            <h2> ABOUT ME</h2>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non adipisci laboriosam placeat nihil ullam dolorum beatae voluptatum, eligendi cum alias.</p>
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, perspiciatis.</p>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio pariatur eius iusto quam totam placeat. Assumenda amet aperiam quasi architecto eum? Fuga debitis beatae amet a? Dolore, libero similique. Eligendi.</p>
          </v-col>
          <v-col class="col-xs-12">
              <v-img src="../assets/portrait.jpg" max-width="500px" contain >

              </v-img>
          </v-col>
      </v-row>
    </div>
</template>

<script>
export default {
    name : 'about'
}
</script>


<style lang="scss" scoped > 
    #about{
        padding-left: 10%;

       h2{  
           text-transform: uppercase;
           font-weight: bold;
           color:var(--accent-color);
           padding-top:15px;
        }
        p {
             padding-block: 10px;
             padding-right: 10px;
             font-weight: 400;
             color: var(--gray);
             font-size: 1.3em;
        }
    }

</style>