import axios from 'axios';

const BASE_URL = 'http://localhost:8080/';

const axiosRequest = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
});

axiosRequest.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export { axiosRequest as request };
