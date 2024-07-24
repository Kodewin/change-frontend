'use client';

import { useEffect, useState } from 'react';

const Page = () => {
  const [authURL, setAuthURL] = useState<string | null>(null);
  useEffect(() => {
    const fetch_auth_url = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/auth/auth_url`);
      const data = await response.json();
      setAuthURL(data.url);
    };
    fetch_auth_url();
  });
  return (
    <div className='flex flex-col items-center justify-center h-screen text-white'>
      <div className='flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full'>
        <h1 className='text-center text-6xl font-bold mb-4'>Change Detection</h1>
        <p className='text-xl text-center mb-8'>Stay Ahead with Change Detection: Monitor, Alert, Archive – Effortlessly!</p>
        {authURL && (
          <button
            className='flex items-center justify-center p-2 gap-1 bg-white rounded-lg text-black'
            onClick={() => {
              window.location.href = authURL as string;
            }}>
            <img loading='lazy' height='24' width='24' id='provider-logo' src='https://authjs.dev/img/providers/google.svg'></img>
            <p className='font-sans font-normal'>Continue with Google</p>
          </button>
        )}
      </div>
    </div>
  );
};
export default Page;
