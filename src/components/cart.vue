<template>
<div class='container-fluid ' id="cart">
    <offer class="pa-2"></offer>
    <div id="cart-items">
        
       <cartProduct productName='t-shirt' description='cooton' discount='10' price='500'></cartProduct>
    
    </div>
    <div id="cart-details">

    </div>
    <cartBottomnavigation/>
    <router-link to='checkout'> checkout</router-link>
</div>
</template>

<script>
import cartProduct from './cart-product-preview.vue' ;
import offer from './offer.vue'
import cartBottomnavigation from './cart-bottom-navigation.vue'
    export default { 
        name: 'cart',components: {
            cartProduct,
            cartBottomnavigation,
            offer

        } 
    }    
</script>
