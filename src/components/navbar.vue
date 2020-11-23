<template>
<nav  id='navbar'>
    <v-app-bar
        app
        fixed
        
        color="#FDF8F5"
        elevate-on-scroll
           >
      <v-app-bar-nav-icon color='#4F4846'  @click="drawer = true"></v-app-bar-nav-icon>
      
      <v-toolbar-title  class='title' @click='goHome()' > <span id='title'>ZIVERO</span> </v-toolbar-title>
    
      <v-icon id='account' class='nav-icon' color='#4F4846'>
        mdi-account
      </v-icon>

      <v-icon id='cart-icon' color='#4F4846' 
        @click='goToCart()'
          >
        mdi-shopping-outline
      </v-icon>
    </v-app-bar>

    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon class='nav-icon'>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</nav>
</template>

<script>
    export default { 
        name: 'navbar',

        components: {

        } ,

        data: () => ({
             drawer: false,
             group: null,

         }),
        methods:{
            goHome(){
                this.$router.push({name:'home'})
            },
            goToCart(){
                this.$router.push({name:'cart'})
            }

        }
    }
</script>

<style scoped lang='css'>
nav{
margin-bottom: 0%;
}
.title{

/*justify-content: center;*/
text-align: center;
margin:auto;

}

.title span{
color:#266150;
font-weight: bold;

}

#cart-icon{

text-align: left;
margin-left:auto;
}

</style>
