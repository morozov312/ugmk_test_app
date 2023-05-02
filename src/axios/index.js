import axios from 'axios';

const config = {
  baseURL: 'http://localhost:3001',
  timeout: 50000,
};

const client = axios.create(config);

export default client;
