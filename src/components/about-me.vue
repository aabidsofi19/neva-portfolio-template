<template>
    <v-container fluid class='aboutme' id='about-me'>
        <h2 class='cormorant pt-5'>
            About Me
        </h2>
        <p class='mono white--text pa-4'>
            Myself Aabid Sofi, and i am a software engineer and a fullstack  webdeveloper. I am frameworks and language agnostic. In backend development I have strong proficiency in python,django,flask,fastapi,graphql,RESTfull apis. I have great expertise with frontend tech like HTML5,CSS3,JS and frameworks like vuejs.I am also pretty with both SQL and NoSql databases.
        </p>

    </v-container>
</template>

<script>
    export default { 
        name: 'aboutMe',components: {

        } 
    }    
</script>

<style scoped> 
.aboutme>p{
    width:100%;
    text-align: left;
    overflow: hidden;
    text-overflow:wrap;
    
}
.aboutme>h2 {
    text-align: center;
    
}
.aboutme>h2::after {
    content: ""; /* This is necessary for the pseudo element to work. */ 
    display: block; /* This will put the pseudo element on its own line. */
    margin: 0 auto; /* This will center the border. */
    width: 20%; /* Change this to whatever width you want. */
    padding-top:2px; /* This creates some space between the element and the border. */
    margin-bottom: 8px;
    border-bottom: 5px solid #f2f2f2; /* This creates the border. Replace black with whatever color you want. */
}
 h2{
    
    font-size:36px;
    color: #66fcf1;
    font-weight:bold;

}

</style>
