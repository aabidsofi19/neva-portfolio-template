<template>
    <v-container fluid class='contact pa-2' id='contact'>
        <v-container>
        <v-row class="py-8">

            <v-col class="info-text" xs="12"  sm="12" md="6">
                 <h2 >
                     Let's 
                     <v-icon>
                        mdi-arrow-right
                     </v-icon>
                 </h2>
                 <h2>
                     Connect
                 </h2>
                 <p>
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque nam assumenda odio velit mollitia facere officia amet adipisci modi maxime dolore iusto earum eaque id autem totam unde voluptates ducimus ut error quos, ipsa animi. Dolorem, doloribus iusto! Nostrum, voluptatem.\
                 </p>
            </v-col>
           
            <v-col class="form"  xs="12"  sm="12" md="6" >
                <v-form ref='form'>
                <v-text-field
                    :rules='nameRules'
                    v-model='name'
                    
                    class='text-field montserrat  my-8'
                    placeholder="name"
                    outlined 
                    >
                </v-text-field>
                <v-text-field
                    :rules='emailRules'
                    v-model='email'
                    class='text-field montserrat my-8'
                    placeholder="email"
                    outlined 
                    >
                </v-text-field>
                <v-textarea
                    :rules='messageRules'
                    v-model='message'
                    background-color="#d3d3d3"
                    class='montserrat my-8'
                    placeholder="message"
                    
                    outlined
                ></v-textarea>
                <v-btn outlined medium
                    @click='submit()'
                    :loading='loading'
                    class='montserrat  btn' 
                    color='primary'>
                    Submit
                </v-btn>    
                </v-form>
            </v-col>
        </v-row>
        </v-container>
    </v-container>
</template>

<script>
    import {client} from '../axiosClient.js';
    export default { 
        name: 'contact',components: {

        },
        data(){ 
            return{
                loading:false,
                name:"" ,
                nameRules: [v => !!v || 'Name is required'],
                email:"",
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                  ],
                message:"",
                messageRules: [v => !!v || 'Message cant be empty'],

                }
        },
        methods:{

            submit(){
                this.loading=true;
                if(this.$refs.form.validate()){
                //fetch the api
                //let url='http://127.0.0.1:8000/submit_message';
                let  params={
                    name:this.name,
                    email:this.email,
                    message:this.message,
                };
                console.log(JSON.stringify(params))
                client.post('submit_message',params)
                    .then((res)=>{
                        console.log(JSON.stringify(res));
                        this.loading=false;
                        this.$refs.form.reset();
                        this.message='message sent successfull';
                     })             
                 }
                this.loading=false;                  
            },        
        },
                
    }    
        </script>

<style scoped lang="scss">

#contact{
    background-color:var( --main-bg-color);
}

.info-text{
  
    padding-right: 2%;
    h2{ 
        max-width:600px;
        width:100vw;  
        font-size: 3em;
        color:var(--highlight-color);
    }
    .mdi-arrow-right{
        font-size: 1.5em;
        color:var(--dark-accent);
    }

    p{
        color:var(--gray);
        font-weight: bold;
        font-size: 1.2em;
    }
}

    
.form{
   
    .text-field{
        height:55px;
        // padding:0;
         background-color: #d3d3d3;
        // background-color:var(--gray);
        
    }


.btn{
   font-weight: bold;
   border-width:3px ;
} 
}


/* .contact{
    margin:auto;
    margin-bottom: 20%;
    width:70%;
    max-width:35rem;
    background-color: #fff;
}

.contact>h2 {
    text-align: center;
    color: #a9a9a9;
    font-size: calc(1rem + 4vw );
}



.text-field{
    height:55px;
    padding:0;
    background-color: lightgrey;
}
*/

</style>
