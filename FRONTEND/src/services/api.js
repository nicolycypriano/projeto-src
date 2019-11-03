import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.200.1.28:8000/api',
});

export default api;
