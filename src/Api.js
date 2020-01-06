import axios from 'axios';

const API = axios.create({
  baseURL: 'https://tjal-api.herokuapp.com'
})

export default API;
