import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://651bfe75194f77f2a5af33c3.mockapi.io/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
