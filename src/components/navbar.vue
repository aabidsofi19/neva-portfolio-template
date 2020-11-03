<template>
<div id='navbar'>
    <v-app-bar
        fixed
        absolute
        color="white"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7" 
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title  class='title' > <span id='title'>ZIVERO</span> </v-toolbar-title>
      <v-icon id='account'>
        mdi-account
      </v-icon>
      <v-icon id='cart-icon'>
        mdi-cart-plus
      </v-icon>
    </v-app-bar>

    <v-navigation-drawer
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
              <v-icon>mdi-home</v-icon>
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
</div>
</template>

<script>
    export default { 
        name: 'navbar ',

        components: {

        } ,

        data: () => ({
             drawer: false,
             group: null,

         })
    }
</script>

<style scoped lang='css'>
.title{

/*justify-content: center;*/
text-align: center;
margin:auto;

}

.title span{
color:grey;


}

#cart-icon{

text-align: left;
margin-left:auto;
}

</style>
