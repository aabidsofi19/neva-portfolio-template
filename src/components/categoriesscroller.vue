<template>
  <div class='categories'>
    <v-slide-group
      multiple
      show-arrow='false'
    >
      <v-slide-item
        v-for="n in 25"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-btn
          class="mx-2"
          :input-value="active"
          active-class="purple white--text"
          depressed
          rounded
          @click="toggle"
        >
          Options1 {{ n }}
        </v-btn>
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
