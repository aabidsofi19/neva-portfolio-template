<template>
 <div id='cat'> 
    <v-slide-group
      v-model="model"
          class="pa-4"
      center-active
      show-arrows='false'
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4 rounded-circle"
          height="80"
          width='80' 
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-img
                height='90'
                width='90'
                class='rounded-circle'
                 src= "https://r7.hiclipart.com/path/360/646/555/laetitia-casta-fashion-photography-model-vogue-paris-lady-with-hat-5678dfcae684bf38a44a8b9196734cb7.png"
              
                contain
                >

            </v-img>
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>   

    </div>



</template>

<script>
    export default { 
        name: 'categories',components: {

        } ,

        data: () => ({
      model: null,
    }),
    }    
</script>
