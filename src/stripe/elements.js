let  stripeElements = {
    
    elementStyles:{
    base: {
    
      color: "#000",
    
      fontWeight: 600,
      fontFamily: 'Quicksand, Open Sans, Segoe UI, sans-serif',
      fontSize: '40px',
      fontSmoothing: 'antialiased',

      ':focus': {
        color: '#424770',
      },

      '::placeholder': {
        color: '#9BACC8',
      },

      ':focus::placeholder': {
        color: '#CFD7DF',
      },
    },
    invalid: {
      color: '#557900',
      ':focus': {
        color: '#FA755A',
      },
      '::placeholder': {
        color: '#FFCCA5',
           },
        },
      },

    elementClasses:{
    focus: 'focus',
    empty: 'empty',
    invalid: 'invalid',
    },
};

export default stripeElements
