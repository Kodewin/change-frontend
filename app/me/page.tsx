'use client';
import AuthContext from '@/contexts/AuthContext';
import useAxios from '@/helpers/useAxios';
import { useContext, useEffect, useState } from 'react';

const Page = () => {
  const api = useAxios();
  const { logoutUser } = useContext(AuthContext);
  const [user, setUser] = useState('');
  useEffect(() => {
    const fetch_auth_url = async () => {
      const response = await api.get(`${process.env.NEXT_PUBLIC_API_HOST}/api/auth/me`);
      const data = await response.data;
      setUser(data['logged_in_as']);
    };
    fetch_auth_url();
  }, []);
  return (
    <div>
      <h1 className='text-3xl text-white m-4'>welcome {user}</h1>
      <button className='bg-red-500 p-2 m-4 text-white' onClick={logoutUser}>LOG OUT</button>
    </div>
  );
};

export default Page;
