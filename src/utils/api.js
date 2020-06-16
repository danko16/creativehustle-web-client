import axios from 'axios';

export const SERVER_DOMAIN = 'http://localhost:3000';

export const Api = axios.create({
  baseURL: SERVER_DOMAIN,
  timeout: 4000,
  headers: {
    version: '1.0.0',
  },
});
