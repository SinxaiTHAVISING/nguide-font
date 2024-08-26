// src/services/apiClient.js
import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL
});

// // Add a request interceptor
// apiClient.interceptors.request.use(
//   (config) => {
//     // Get the access token from local storage
//     const token = localStorage.getItem('accessToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor to handle errors globally (e.g., token expiration)
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // Handle token expiration (e.g., redirect to login)
//       console.error('Token expired or unauthorized');
//     }
//     return Promise.reject(error);
//   }
// );

export default apiClient;
