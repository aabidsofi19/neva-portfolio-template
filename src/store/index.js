import Vue from 'vue'
import Vuex from 'vuex'

// import {client} from '../axiosClient'
import _ from 'lodash';


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
      Sociallinks:[
          {
              icon:'mdi-facebook',
              src:'#'
          },
          {
              icon:'mdi-linkedin',
              src:'#'
          },
          {
              icon:'mdi-github',
              src:'#'
          },
          {
              icon:'mdi-instagram',
              src:'#'
          }
      ],
      projects: [
          {
                name:"Quotsy",
                description:"Quotes and Poetry Website.",
                tech_stack:["Django"],
                img:"https://res.cloudinary.com/dh3azc5sk/image/upload/v1610887992/Portfolio/images_61_bdofvp.jpg",
                url:"https://quotsy..com"
            },
            {
                name:"new Site ",
                description:"For coding and Tech geeks",
                tech_stack:["Django"],
                img:"https://res.cloudinary.com/dh3azc5sk/image/upload/v1610887992/Portfolio/images_62_qt6nou.jpg",
                url:"#"
            },
        
        ]

      

  },
    mutations:{
        // addProjects(state,projects){
        //     state.projects = projects
        // }
    },
    getters:{
        projectChunks(state){
            return _.chunk(state.projects,2)
        }
    },
    actions:{
        // async getProjects({commit}){
        //     //let url='http://localhost:8000/projects'
        //     let res=await client.get('projects');
        //     console.log(JSON.stringify(res));
        //     commit('addProjects',res.data);

        // }

    }



})
