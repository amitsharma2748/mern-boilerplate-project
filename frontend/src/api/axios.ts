// src/api/axios.ts
import axios from "axios";

// Create an Axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Use Vite env var
  withCredentials: true, // If you need to send cookies
});

// REQUEST INTERCEPTOR
apiClient.interceptors.request.use(
  (config) => {
    // Example: Add token to headers
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Example: Global error handling
    if (error.response?.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      // Redirect or handle as needed
    }

    return Promise.reject(error);
  }
);

export default apiClient;
