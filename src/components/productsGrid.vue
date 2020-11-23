<template>
<v-container class="grey" lighten-5>
    {{allProducts.data.Products[0].name}}
    {{productChunks}}
    <v-row no-gutters v-for='chunk in productChunks' 
    :key='chunk'>
      <v-col
        v-for="product in chunk"
        :key="product"
        cols="6"        
        sm='6'
        lg='4'      
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <v-img 
           contain
           src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTc07deu94DwzBJyiEdlhzsCB-hCYbPK1GitA&usqp=CAU'
        
        

           >


        </v-img>
        <v-row no-gutters>
            <v-col
                sm='6'
                >
              <h4>
                {{product.name}}
              </h4>
              <h6>
                {{product.brand}}
              </h6>
              <h5>
                {{product.MRP}}
              </h5>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
                sm='6'>
             <v-icon id='cart'>
                   mdi-cart-plus
              </v-icon>
            </v-col>
      
        </v-row>
       </v-card>
      </v-col>
    </v-row>
  </v-container>
</template> 

<script>
import lodash from 'lodash';
import {ALL_PRODUCTS_QUERY} from '../graphql.js'; 
    export default { 
        name: 'productsGrid',
        components: {

        },
        data(){
            return{
                allProducts:[],
                hello:'',
                itemsPerRow:2
            }
        },
         async mounted () {
        this.loading = true
        this.allProducts = await this.$apollo.query({ query: ALL_PRODUCTS_QUERY })
        this.loading = false
        },
        computed: {
            productChunks() {
                 return lodash.chunk(Object.values(this.allProducts.data.Products),this.itemsPerRow);
            }
        }
}   
</script>
<style scoped lang='css'>
#cart{
justify-content: right;
margin-left:80px;
margin-top: 20px;}

</style>
