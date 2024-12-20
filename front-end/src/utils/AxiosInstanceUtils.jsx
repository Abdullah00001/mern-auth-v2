import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AxiosInstanceUtils = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default AxiosInstanceUtils;
