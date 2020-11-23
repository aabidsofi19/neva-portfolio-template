<template>
    <div class="checkout" id='checkout'>
        <div class="heading">
        <div class="overlay">
            <p>
                Confirm Order And Pay
            </p>
        </div>
        </div>
        <div class="card" height='50vh'    
        tile 
        elevation='1'>
           <p>
           PAY WITH CREDIT/DEBIT CARD
           </p>        
           <div class='card-details'>
            <v-text-field 
                :rules="rules" 
                label='Cardholder Name'
                >
            </v-text-field>

            <div ref="cardNumber" class='card-field' id='cardNumber'>
            </div>
            
            <div ref="cardCvc" id='cardCvc' class='card-field my-4'>
            </div>
            <div ref='cardExpiry' id='cardExpiry' class='card-field my-4'>    
            </div>
            </div>
            
        </div>

        <v-card class="details mb-8" height='40vh'
            rounded >
            <p>
                You Have To Pay
            </p>
            <p id="amt">
                {{totatAmout}}
            </p>
            <v-divider></v-divider>
            <div>
                 <p>
                    Company:
                 </p>
                <p>
                     ZIVERO
                </p>
            </div>
            <p>
                 ORDER ID :
            </p>
            <p>
                 {{OrderId}}
            </p>
            
        </v-card>
        <div class='mt-10 dummy' height='20%'></div>
        <!--  --{{istyle}}-->
        <v-bottom-navigation fixed horizontal>
            <v-btn>
                <span>Pay</span>
            </v-btn>
        </v-bottom-navigation> 
            
    </div>
</template>

<script>
    import stripeElements from '../stripe/elements.js';
    let stripe= window.Stripe('pk_test_Jv6wYlXEfjDe5XS5C2MpqEuR00xUQo6Buk'),
    elements = stripe.elements({fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css?family=Quicksand',
      },
    ],}),
    cardNumber = undefined,
    cardExpiry=undefined,
    cardCvc=undefined;
    export default { 
        name: 'customCheckout',components: {

        },
        data(){
            return{
                totatAmout:100,
                OrderId:'gx14678',
        
                stripeElement:stripeElements,
                rules: [
                    value => !!value || 'Required.',
                    value => (value || '').length <= 20 || 'Max 20 characters',]

            }
        },

        mounted(){
            cardNumber = elements.create('cardNumber',{
                 style: stripeElements.elementStyles,
                 classes: stripeElements.elementClasses
            });

            cardNumber.mount(this.$refs.cardNumber);
            cardCvc = elements.create('cardCvc', 
            {
                 style: stripeElements.elementStyles,
                 classes: stripeElements.elementClasses
            });
            cardCvc.mount(this.$refs.cardCvc);
            cardExpiry = elements.create('cardExpiry', 
            {
                 style: stripeElements.elementStyles,
                 classes: stripeElements.elementClasses
            })
            cardExpiry.mount(this.$refs.cardExpiry);

        }
    }    
</script>

<style scoped >
#checkout{
background-color:#f2f2f2;
}
.overlay{
height:100%;
margin:-10px;
background: rgba(255,255,255,0.3);

}
.heading{
height:30vh;
background-image: url('../assets/Waiau.svg');

background-size: cover;

/*background-position: right 45px top 20px;*/
background-color: #f2f2f2;
text-align: center;
padding:10px;
}

.heading p{

color:#000;
font-size: 30px;
font-weight:bold;

}
.checkout{
background-color: #fff;

}
.card{
margin-top:-10%;
margin-left: 5%;
margin-right: 5%;
background-color: #fff;
padding:5%;
}
#cardNumber{
border-bottom: 2px solid grey;
}
#cardCvc{
border-bottom: 2px solid grey;
}
#cardExpiry{
border-bottom: 2px solid grey;
}
.card-field{
height: 15%;
}
.details{
margin:5%;

padding:5%;
color:#fdf8f5;
background-color: #266150;
}

.dummy{
height:80px;
}
</style>
