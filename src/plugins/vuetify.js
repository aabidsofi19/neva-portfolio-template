import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
   
    theme: {
        themes: {
          light: {
            primary:  "#950740" , 
            secondary: "#6f2232",
            accent: "#c30734",
            error: "red",
          },
         
        },
      },
    
});
