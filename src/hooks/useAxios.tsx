import AuthContext from '@/contexts/AuthContext';
import axios from 'axios';
import { useContext } from 'react';

const baseURL = process.env.NEXT_PUBLIC_API_HOST;

const useAxios = () => {
  const { authTokens } = useContext(AuthContext);
  const axiosInstance = axios.create({
    baseURL,
    headers: { 'x-api-key': '0933eacd7da2421c5b71634f69f03377', Authorization: `Bearer ${authTokens?.access}` },
  });

  return axiosInstance;
};

export default useAxios;
