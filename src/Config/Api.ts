import axios from 'axios';

// export const API_URL = "http://localhost:8081";
export const API_URL = "https://ecommerce-backend.zeabur.app";

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});