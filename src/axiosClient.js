import axios from 'axios';

export  const client = axios.create({
 // baseURL:`https://aabidsofi-api.herokuapp.com/`,
    baseURL:'https://aabid-cms.herokuapp.com/portfolio/api/'
 })
