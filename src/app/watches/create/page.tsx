'use client'
import { useState } from 'react';
import Wrapper from '@/app/Wrapper';

const Page = () => {
  const [crawlingArea, setCrawlingArea] = useState('single-url');
  const [urlInput, setUrlInput] = useState('');

  const handleCrawlingChange = (event) => {
    setCrawlingArea(event.target.value);
    setUrlInput(''); // Reset URL input when the crawling area changes
  };

  const handleUrlChange = (event) => {
    setUrlInput(event.target.value);
  };

  return (
    <Wrapper>
      <div className='flex-1 p-8'>
        <h1 className='text-2xl font-bold mb-4 text-teal-800'>Create a New Watch</h1>
        <form className='space-y-6'>
          <div className='mb-4'>
            <label className='block text-teal-700 font-medium'>Watch Name</label>
            <input
              type='text'
              className='w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-teal-700 font-medium'>Area of Crawling</label>
            <div className='flex space-x-6'>
              <div className='flex items-center'>
                <input
                  type='radio'
                  id='single-url'
                  name='crawling'
                  value='single-url'
                  className='mr-2 text-teal-600 focus:ring-teal-500'
                  checked={crawlingArea === 'single-url'}
                  onChange={handleCrawlingChange}
                />
                <label htmlFor='single-url' className='text-teal-700'>
                  Single URL
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  type='radio'
                  id='multiple-urls'
                  name='crawling'
                  value='multiple-urls'
                  className='mr-2 text-teal-600 focus:ring-teal-500'
                  checked={crawlingArea === 'multiple-urls'}
                  onChange={handleCrawlingChange}
                />
                <label htmlFor='multiple-urls' className='text-teal-700'>
                  Multiple URLs
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  type='radio'
                  id='entire-website'
                  name='crawling'
                  value='entire-website'
                  className='mr-2 text-teal-600 focus:ring-teal-500'
                  checked={crawlingArea === 'entire-website'}
                  onChange={handleCrawlingChange}
                />
                <label htmlFor='entire-website' className='text-teal-700'>
                  Entire Website
                </label>
              </div>
            </div>
          </div>
          <div className='mb-4'>
            <label className='block text-teal-700 font-medium'>URLs</label>
            {crawlingArea === 'multiple-urls' ? (
              <textarea
                value={urlInput}
                onChange={handleUrlChange}
                className='w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500'
                rows={3}></textarea>
            ) : (
              <input
                type='text'
                value={urlInput}
                onChange={handleUrlChange}
                className='w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500'
              />
            )}
          </div>
          <div className='mb-4'>
            <label className='block text-teal-700 font-medium'>Type of Monitoring</label>
            <select className='w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500'>
              <option>Content Monitoring</option>
              <option>SEO Monitoring</option>
              <option>HTML Monitoring</option>
              <option>Visual Monitoring</option>
              <option>Time Traveller</option>
            </select>
          </div>
          <button
            type='submit'
            className='w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500'>
            Create Watch
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Page;
