'use client';
import LoaderComponent from '@/components/Loaders/LoaderComponent';
import AuthContext from '@/contexts/AuthContext';
import { useSearchParams } from 'next/navigation';
import { useContext, useEffect } from 'react';

const Page = () => {
  const { loginUser } = useContext(AuthContext);
  const searchParams = useSearchParams();
  useEffect(() => {
    const fetch_tokens = async (auth_code: any) => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/auth/google/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: auth_code }),
      });
      const data = await response.json();
      console.log('data - ', data)
      loginUser(data);
    };
    const auth_code = searchParams.get('code');
    fetch_tokens(auth_code);
  }, [searchParams]);
  return (
    <div className='flex h-dvh items-center justify-center'>
      <LoaderComponent />
    </div>
  );
};

export default Page;
