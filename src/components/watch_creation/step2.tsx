// Step2.tsx
import { useWatch } from '@/contexts/WatchCreationContext';
import React, { useState } from 'react';


interface StepProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step2: React.FC<StepProps> = ({ onNext, onPrev }) => {
  const { watchData, updateWatchData } = useWatch();
  const [progress, setProgress] = useState(0);

  const startCrawl = () => {

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className='p-4 bg-white rounded-lg shadow-md'>
      <div className='m-4 flex justify-between '>
        <button
          onClick={onPrev}
          className='w-56 px-4 py-2 bg-gray-600 text-white font-semibold rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'>
          Previous
        </button>
        <h1 className='text-2xl font-bold text-teal-700 mb-4'>Specify URLs and Crawl</h1>
        <button
          onClick={onNext}
          className='w-56 px-4 py-2 bg-teal-600 text-white font-semibold rounded-md shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500'>
          Next
        </button>
      </div>
      <div className='mb-4 flex items-center justify-center gap-5'>
        <label className='block text-gray-700'>URLs</label>
        {watchData.monitorType === 'single' ? (
          <input
            type='text'
            placeholder='Enter URL'
            value={watchData.urls}
            onChange={(e) => updateWatchData('urls', e.target.value)}
            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'
          />
        ) : (
          <textarea
            rows={5}
            value={watchData.urls}
            onChange={(e) => updateWatchData('urls', e.target.value)}
            className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'></textarea>
        )}
      <button
        onClick={startCrawl}
        className='w-56 px-4 py-2 bg-teal-600 text-white font-semibold rounded-md shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500'>
        Start Crawl
      </button>
      </div>
      <div className='mt-4 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
        <div className='bg-teal-600 h-2.5 rounded-full' style={{ width: `${progress}%` }}></div>
      </div>
      <div className='mt-4'>
        <p className='text-gray-700'>Screenshot and content of the page will be displayed here after crawl.</p>
        <div className='flex gap-6 px-20'>
          <button
            onClick={() => alert('Login Required')}
            className='mt-2 w-full px-4 py-2 bg-teal-600 text-white font-semibold rounded-md shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500'>
            Login Required
          </button>
          <button
            onClick={() => alert('Add User Actions')}
            className='mt-2 w-full px-4 py-2 bg-teal-600 text-white font-semibold rounded-md shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500'>
            Add User Actions
          </button>
          <button
            onClick={() => alert('Edit Crawl Delay')}
            className='mt-2 w-full px-4 py-2 bg-teal-600 text-white font-semibold rounded-md shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500'>
            Edit Crawl Delay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
