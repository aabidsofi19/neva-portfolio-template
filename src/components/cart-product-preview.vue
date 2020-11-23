<template>
    <v-card class="product-preview container" height='300px'
        tile>
        <v-row height='80%'>          
            <v-col 
                cols='6'
                >
                <v-img class='product-image'
                    :src='imgSrc'
                    height='100%'
                    
                    >
                </v-img>
            </v-col>
            <v-col
                height='100%'
                cols='6'>
                <div class="product-details">
                    <p>{{productName}}</p>
                    <p>{{description}}</p>
                
                    <div class="quantity d-flex justify-space-around">
                    <v-btn class="d-inline" flat icon @click='quantityPlus()' ripple>
                        <v-icon class="d-inline" >
                             mdi-plus
                         </v-icon>
                    </v-btn>
                    <v-text-field class='d-inline' v-model='Quantity'> 
                    </v-text-field>
                    <v-btn class="d-inline" flat icon @click='quantityMinus()' ripple>
                        <v-icon class="d-inline" >
                             mdi-minus
                         </v-icon>
                    </v-btn>

                    </div>
                    <p>{{variation}}</p>
                    <p>You save {{discount}}%</p>
                </div>
            </v-col>           
        </v-row>
        <v-divider></v-divider>
          <div class="d-flex justify-space-around">
            <div class="d-inline" id='remove'>
                Remove
            </div>
            <v-divider vertical class='pa-2'></v-divider>

            <div class="d-inline" id='add-to-wishlist'>
                
                Add To Wishlist
            </div>
        </div>
        
  

    </v-card>

</template>

<script>
    
    export default { 
        name: 'cartProduct',
        props:['productName','description','price','discount','quantity','variation','imgSrc'],
        components: {

        },
        data(){
            return{
                Quantity:2
            }
        },
        methods:{
            quantityPlus(){
                this.Quantity+=1;
            },
            quantityMinus(){
                this.Quantity-=1;
            },
        }
    }    
</script>
<style scoped lang="css">
.product-preview{
    

}
/*.inline{
float: left;}*/

</style>
