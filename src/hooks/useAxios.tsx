import AuthContext from '@/contexts/AuthContext';
import axios from 'axios';
import { useContext } from 'react';

const baseURL = process.env.NEXT_PUBLIC_API_HOST;

const useAxios = () => {
  const { authTokens } = useContext(AuthContext);
  const axiosInstance = axios.create({
    baseURL,
    headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY, Authorization: `Bearer ${authTokens?.access}` },
  });

  return axiosInstance;
};

export default useAxios;
