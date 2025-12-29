import axios from "axios";

// Flag to prevent multiple redirects
let isRedirecting = false;

// Create axios instance with base configuration
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

// Request interceptor - Add token to all requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Token");
    if (token) {
      try {
        const parsedToken = JSON.parse(token);
        config.headers.Authorization = `Bearer ${parsedToken}`;
      } catch (error) {
        // Token parsing failed - remove invalid token
        localStorage.removeItem("Token");
        localStorage.removeItem("userId");
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;
      const currentPath = window.location.pathname;

      // Handle unauthorized or forbidden requests
      if ((status === 401 || status === 403) && !isRedirecting) {
        // Only redirect if not already on auth pages
        const authPages = ["/logIn", "/login", "/register"];
        if (!authPages.includes(currentPath)) {
          isRedirecting = true;
          // Clear local storage
          localStorage.removeItem("userId");
          localStorage.removeItem("Token");
          
          // Redirect to login page
          window.location.href = "/logIn";
          
          // Reset flag after delay
          setTimeout(() => {
            isRedirecting = false;
          }, 2000);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
