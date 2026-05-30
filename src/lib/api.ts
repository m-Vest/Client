import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.DEV
    ? '/api/v1'
    : import.meta.env.VITE_API_BASE_URL,
  withCredentials: false,
});
