import axios from 'axios';

export default axios.create({
  baseURL: 'https://backend-flaskrestx.herokuapp.com/api/v1'
})