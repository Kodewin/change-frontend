import axios from 'axios';

const baseURL = 'http://localhost:8000';

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL,
    headers: { 'x-api-key': '7c538a7f48e0e8ef45fdce5e8af8bea5' },
  });

  return axiosInstance;
};

export default useAxios;
