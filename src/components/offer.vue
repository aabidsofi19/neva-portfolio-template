<template>
<div class="offer">
    <div class="offer-box">
    <p class ='d-inline center' > free shiping today</p>
    <v-icon id='ship' class='d-inline'>
        mdi-moped
    </v-icon>
    </div>
</div>
</template>

<script>
    export default { 
        name: 'offer',components: {
            

        } 
    }    
</script>
<style scoped lang='css'>
.offer{
text-align: center;

}

.offer-box{
border-left:0px;
border-right:0px;
border-top:solid grey 4px;
border-bottom:solid grey 4px;
padding:1px;
margin:2px;
}
#ship{
display: inline;
margin-left: 4px;
}
.offer p{
text-transform: uppercase;
font-family: 'Roboto',Sans-Serif;
font-weight: bold;
font-size:100%;
color:black;
}

</style>
