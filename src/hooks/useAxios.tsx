import AuthContext from '@/contexts/AuthContext';
import axios from 'axios';
import { useContext } from 'react';

const baseURL = process.env.NEXT_PUBLIC_API_HOST;

const useAxios = () => {
  const { authTokens } = useContext(AuthContext);
  const axiosInstance = axios.create({
    baseURL,
    headers: { 'x-api-key': '71922c7d0c103b6e3700858633164921', Authorization: `Bearer ${authTokens?.access}` },
  });

  return axiosInstance;
};

export default useAxios;
