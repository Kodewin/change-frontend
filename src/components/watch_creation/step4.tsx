// Step4.tsx
import { useWatch } from '@/contexts/WatchCreationContext';
import React from 'react';

interface StepProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step4: React.FC<StepProps> = ({ onNext, onPrev }) => {
  const { watchData, updateWatchData } = useWatch();

  return (
    <div className='p-4 bg-white rounded-lg shadow-md'>
      <div className='m-4 flex justify-between'>
        <button
          onClick={onPrev}
          className='w-56 px-4 py-2 bg-gray-600 text-white font-semibold rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'>
          Previous
        </button>
        <h1 className='text-2xl font-bold text-teal-700 mb-4'>Set Frequency</h1>
        <button
          onClick={onNext}
          className='w-56 px-4 py-2 bg-teal-600 text-white font-semibold rounded-md shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500'>
          Next
        </button>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Frequency</label>
        <select
          value={watchData.frequency}
          onChange={(e) => updateWatchData('frequency', e.target.value)}
          className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'>
          <option value='monthly'>Once every month</option>
          <option value='weekly'>Once every week</option>
          <option value='5days'>Every 5 days</option>
          <option value='daily'>Check every day</option>
          <option value='12hours'>Every 12 hours</option>
          <option disabled>-- Premium Options --</option>
          <option value='6hours'>Every 6 hours</option>
          <option value='3hours'>Every 3 hours</option>
          <option value='hourly'>Every hour</option>
          <option value='30mins'>Every 30 mins</option>
          <option value='20mins'>Every 20 mins</option>
          <option value='10mins'>Every 10 mins</option>
          <option value='5mins'>Every 5 mins</option>
        </select>
      </div>
    </div>
  );
};

export default Step4;
