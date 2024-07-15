import AuthContext from '@/contexts/AuthContext';
import axios from 'axios';
import { useContext } from 'react';

const baseURL = 'http://localhost:8000';

const useAxios = () => {
  const { authTokens } = useContext(AuthContext);
  const axiosInstance = axios.create({
    baseURL,
    headers: { 'x-api-key': '7c538a7f48e0e8ef45fdce5e8af8bea5', Authorization: `Bearer ${authTokens?.access}` },
  });

  return axiosInstance;
};

export default useAxios;
