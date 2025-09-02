import { axiosInstance } from './axios';

export const applyInterceptors = () => {
  axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (error.response?.status === 401) {
        console.warn('Unauthorized — redirect to login?');
      }
      return Promise.reject(error);
    },
  );
};
