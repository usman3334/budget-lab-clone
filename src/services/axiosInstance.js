import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backend.budgetlab.io/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;


