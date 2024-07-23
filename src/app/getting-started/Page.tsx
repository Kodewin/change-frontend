'use client';
import ButtonDefault from '@/components/Buttons/ButtonDefault';
import FAQ from '@/components/landing/FAQ';
import NavBar from '@/components/landing/NavBar';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { initFlowbite } from 'flowbite';
import { useEffect, useState } from 'react';

const Page = () => {
  const [authURL, setAuthURL] = useState<string | null>(null);

  useEffect(() => {
    initFlowbite();
  }, []);

  useEffect(() => {
    const fetch_auth_url = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/auth/auth_url`);
      const data = await response.json();
      setAuthURL(data.url);
    };
    fetch_auth_url();
  }, []);

  const content = [
    {
      title: 'Step - 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula consectetur urna at vehicula. Curabitur accumsan eleifend nisl, in vestibulum tortor tristique quis. Nam eget dui et nunc rhoncus interdum a a urna. Mauris consequat sapien at porta ullamcorper. Quisque vehicula massa non ullamcorper elementum. Sed urna magna, convallis ac justo at, dictum semper erat. Vestibulum hendrerit scelerisque nulla, vitae consequat felis. Sed eu nulla a justo gravida gravida non non nisi. Morbi nec dolor non ex facilisis congue.',
      content: (
        <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>
          Collaborative Editing
        </div>
      ),
    },
    {
      title: 'Step - 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula consectetur urna at vehicula. Curabitur accumsan eleifend nisl, in vestibulum tortor tristique quis. Nam eget dui et nunc rhoncus interdum a a urna. Mauris consequat sapien at porta ullamcorper. Quisque vehicula massa non ullamcorper elementum. Sed urna magna, convallis ac justo at, dictum semper erat. Vestibulum hendrerit scelerisque nulla, vitae consequat felis. Sed eu nulla a justo gravida gravida non non nisi. Morbi nec dolor non ex facilisis congue.',
      content: (
        // <div className='h-full w-full  flex items-center justify-center text-white'>
        //   <Image src='/linear.webp' width={300} height={300} className='h-full w-full object-cover' alt='linear board demo' />
        // </div>
        <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>
          Step - 2
        </div>
      ),
    },
    {
      title: 'Step - 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula consectetur urna at vehicula. Curabitur accumsan eleifend nisl, in vestibulum tortor tristique quis. Nam eget dui et nunc rhoncus interdum a a urna. Mauris consequat sapien at porta ullamcorper. Quisque vehicula massa non ullamcorper elementum. Sed urna magna, convallis ac justo at, dictum semper erat. Vestibulum hendrerit scelerisque nulla, vitae consequat felis. Sed eu nulla a justo gravida gravida non non nisi. Morbi nec dolor non ex facilisis congue.',
      content: (
        <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white'>
          Version control
        </div>
      ),
    },
    {
      title: 'Step - 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula consectetur urna at vehicula. Curabitur accumsan eleifend nisl, in vestibulum tortor tristique quis. Nam eget dui et nunc rhoncus interdum a a urna. Mauris consequat sapien at porta ullamcorper. Quisque vehicula massa non ullamcorper elementum. Sed urna magna, convallis ac justo at, dictum semper erat. Vestibulum hendrerit scelerisque nulla, vitae consequat felis. Sed eu nulla a justo gravida gravida non non nisi. Morbi nec dolor non ex facilisis congue.',
      content: (
        <div className='h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white'>
          Running out of content
        </div>
      ),
    },
  ];
  const features = [
    {
      icon: 'fa-bars-progress',
      heading: 'Innovative Technology',
      description: 'Quisque vehicula massa non ullamcorper elementum. Sed urna magna, convallis ac justo at, dictum semper erat.',
    },
    {
      icon: 'fa-chart-simple',
      heading: 'Fast Performance',
      description: 'Quisque vehicula massa non ullamcorper elementum. Sed urna magna, convallis ac justo at, dictum semper erat. ',
    },
    {
      icon: 'fa-globe',
      heading: 'Global Reach',
      description: 'Quisque vehicula massa non ullamcorper elementum. Sed urna magna, convallis ac justo at, dictum semper erat.',
    },
    {
      icon: 'fa-user',
      heading: 'User Centric',
      description: 'Quisque vehicula massa non ullamcorper elementum. Sed urna magna, convallis ac justo at, dictum semper erat.',
    },
  ];
  return (
    <div>
      <NavBar />
      <div className='mx-auto h-[calc(100dvh-5rem)] w-1/2 flex flex-col items-center justify-center pb-28'>
        <h1 className='text-4xl font-bold text-center text-black text-pretty'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <p className='text-lg text-center mt-5 text-pretty'>
          Etiam vehicula consectetur urna at vehicula. Curabitur accumsan eleifend nisl, in vestibulum tortor tristique quis. Nam eget
          dui et nunc rhoncus interdum a a urna. Mauris consequat sapien at porta ullamcorper.Quisque vehicula massa non ullamcorper
          elementum.
        </p>
        <button
          className=''
          onClick={() => {
            window.location.href = authURL as string;
          }}>
          <ButtonDefault
            label='Continue with Google'
            link='#'
            customClasses='bg-neutral-800 rounded-lg text-white py-[11px] px-3 mt-6'>
            <img loading='lazy' height='24' width='24' id='provider-logo' src='https://authjs.dev/img/providers/google.svg'></img>
          </ButtonDefault>
        </button>
      </div>
      <StickyScroll content={content} />
      <div className='min-h-[100dvh]'>
        <div className='pt-20 pb-15 flex flex-col items-center justify-center'>
          <h3 className='text-4xl text-black font-bold'>Best Features</h3>
          <p className='text-pretty w-1/3 text-center'>
            Etiam vehicula consectetur urna at vehicula. Curabitur accumsan eleifend nisl, in vestibulum tortor tristique quis Mauris
            consequat sapien at porta ullamcorper Mauris consequat sapien at porta ullamcorper
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10'>
          {[...features, ...features, ...features].map((feature, index) => (
            <div key={index} className='text-center p-6 bg-white rounded-lg shadow-md'>
              <i className={`fa-solid text-5xl ${feature.icon} hover:text-primary`}></i>
              <h3 className='text-xl font-semibold text-teal-900 mb-2'>{feature.heading}</h3>
              <p className='text-teal-700'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='p-10'>
        <FAQ />
      </div>
    </div>
  );
};

export default Page;
