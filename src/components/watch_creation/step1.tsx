// Step1.tsx
import { useWatch } from '@/contexts/WatchCreationContext';
import React from 'react';


interface StepProps {
  onNext: () => void;
}

const Step1: React.FC<StepProps> = ({ onNext }) => {
  const { watchData, updateWatchData } = useWatch();

  return (
    <div className='p-4 bg-white rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold text-teal-700 mb-4'>Choose What to Monitor</h1>
      <div className='mb-4'>
        <label className='block text-gray-700'>What do you want to monitor?</label>
        <select
          value={watchData.monitorType}
          onChange={(e) => updateWatchData('monitorType', e.target.value)}
          className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'>
          <option value='single'>Single URL</option>
          <option value='multiple'>Multiple URLs</option>
          <option value='entire'>Entire Website</option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Type of Monitoring</label>
        <select
          value={watchData.monitoringType}
          onChange={(e) => updateWatchData('monitoringType', e.target.value)}
          className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'>
          <option value='content'>Content Monitoring</option>
          <option value='seo'>SEO Monitoring</option>
          <option value='html'>HTML Monitoring</option>
          <option value='visual'>Visual Monitoring</option>
          <option value='timeTraveller'>Time Traveller</option>
        </select>
      </div>
      <button
        onClick={onNext}
        className='mt-4 w-full px-4 py-2 bg-teal-600 text-white font-semibold rounded-md shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500'>
        Next
      </button>
    </div>
  );
};

export default Step1;
