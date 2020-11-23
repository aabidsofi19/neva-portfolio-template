<template>
<div class="checkout">
<p>
checkout
</p>
<section>
      <div class="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div class="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <button id="checkout-button" @click='redirectToCheckout()'>Checkout</button>
    </section>
    {{sessionId.data.checkoutId.checkoutId}}
</div>
</template>

<script>
    import {CREATE_CHECKOUT_SESSION} from '../graphql/CREATE_CHECKOUT_SESSION.js';
let stripe = window.Stripe('pk_test_Jv6wYlXEfjDe5XS5C2MpqEuR00xUQo6Buk');
   
    export default { 
        name: 'checkout',

        components: {
        } ,
        data(){
            return{ 
                sessionId:""}
        },
        methods:{
            redirectToCheckout(){
                return stripe.redirectToCheckout({ sessionId: this.sessionId.data.checkoutId.checkoutId});
            }
        },
        async mounted () {
        this.loading = true
        this.sessionId = await this.$apollo.query({ query: CREATE_CHECKOUT_SESSION })
        this.loading = false
        },
        
    }    
</script>
