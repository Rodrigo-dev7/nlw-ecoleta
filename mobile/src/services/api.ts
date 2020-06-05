import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.25:4444/'
})

export default api;