import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://api.creativehustle.id',
  timeout: 4000,
  headers: {
    version: '1.0.0',
  },
});
