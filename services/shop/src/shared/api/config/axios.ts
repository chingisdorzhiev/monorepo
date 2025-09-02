import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
