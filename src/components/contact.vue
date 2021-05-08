<template>
    <v-container class='contact pa-2' id='contact'>
        <h2 class='mono'>
           Contact
        </h2>
        <v-form ref='form'>
        <v-text-field
            :rules='nameRules'
            v-model='name'
            
            class='text-field montserrat mb-6'
            placeholder="name"
            outlined 
            >
        </v-text-field>
         <v-text-field
            :rules='emailRules'
            v-model='email'
            class='text-field montserrat mb-6'
            placeholder="email"
            outlined 
            >
        </v-text-field>
        <v-textarea
            :rules='messageRules'
            v-model='message'
            background-color="#d3d3d3"
            class='montserrat mb-6'
            label="message"
            
            outlined
        ></v-textarea>
        <v-btn outlined medium
            @click='submit()'
            :loading='loading'
            class='montserrat btn' 
            color='#a9a9a9'>
            Submit
        </v-btn>
        </v-form>


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

<style scoped>
.contact{
    margin:auto;
    margin-bottom: 20%;
    width:30vw;
    min-width:25rem;
    background-color: #fff;
}

.contact>h2 {
    text-align: center;
    color: #a9a9a9;
    font-size: calc(1rem + 4vw );
}
.contact>h2::after {
    content: ""; /* This is necessary for the pseudo element to work. */ 
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto; /* This will center the border. */
    width: 20%; /* Change this to whatever width you want. */
    padding-top:2px; /* This creates some space between the element and the border. */
    margin-bottom: 8px;
    border-bottom: 5px solid #f2f2f2; /* This creates the border. Replace black with whatever color you want. */
}
.text-field{
    height:55px;
    padding:0;
    background-color: #d3d3d3;
}

.text-field{
    height:55px;
    padding:0;
    background-color: lightgrey;
}

.btn{
    width:28%;
    margin-top:-10px;
    margin-left:69%;
    border-width:3px ;
}

</style>
