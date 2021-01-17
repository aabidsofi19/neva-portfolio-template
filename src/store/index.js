import Vue from 'vue'
import Vuex from 'vuex'

import {client} from '../axiosClient'
import _ from 'lodash';


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
      Sociallinks:[
          {
              icon:'mdi-facebook',
              src:'https://www.facebook.com/profile.php?id=100010924879075'
          },
          {
              icon:'mdi-linkedin',
              src:'https://www.linkedin.com/in/aabid-sofi-2350771b2'
          },
          {
              icon:'mdi-github',
              src:'https://github.com/aabidsofi19'
          },
          {
              icon:'mdi-instagram',
              src:'https://www.instagram.com/aa_bid_sofi'
          }
      ],
      projects: [

      ]

  },
    mutations:{
        addProjects(state,projects){
            state.projects.push(...projects)   
        }
    },
    getters:{
        projectChunks(state){
            return _.chunk(state.projects,2)
        }
    },
    actions:{
        async getProjects({commit}){
            //let url='http://localhost:8000/projects'
            let res=await client.get('projects');
            console.log(JSON.stringify(res));
            commit('addProjects',res.data);
            
        }

    }
    
  
  
})
