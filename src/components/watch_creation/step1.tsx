import { useWatch } from '@/contexts/WatchCreationContext';
import React from 'react';

interface Step1Props {
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {
  const { watchData, updateWatchData } = useWatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    updateWatchData(name as keyof typeof watchData, value);
  };

  return (
    <div className='bg-white p-6 rounded shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Create a New Watch</h2>
      <div className='mb-4'>
        <label className='block text-gray-700'>What do you want to monitor?</label>
        <select
          required
          name='monitorType'
          value={watchData.monitorType}
          onChange={handleChange}
          className='w-full px-4 py-2 border rounded-md'>
          <option value='singleUrl'>Single URL</option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Type of Monitoring</label>
        <select
          required
          name='monitoringType'
          value={watchData.monitoringType}
          onChange={handleChange}
          className='w-full px-4 py-2 border rounded-md'>
          <option value='content'>Content Monitoring</option>
          <option value='seo'>SEO Monitoring</option>
          <option value='html'>HTML Monitoring</option>
          <option value='visual'>Visual Monitoring</option>
          <option value='timeTraveler'>Time Traveller</option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>URL</label>
        <input
          required
          placeholder='https://someurl.com'
          type='text'
          name='url'
          value={watchData.url}
          onChange={handleChange}
          className='w-full px-4 py-2 border rounded-md'
        />
      </div>
      <button disabled={!(watchData.url && watchData.monitorType && watchData.monitoringType)} onClick={onNext} className={'bg-teal-500 text-white px-4 py-2 rounded-md' + 
        (!watchData.url ? ' cursor-not-allowed' : '')
      }>
        Next
      </button>
    </div>
  );
};

export default Step1;
