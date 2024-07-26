// Step3.tsx
import { useWatch } from '@/contexts/WatchCreationContext';
import React from 'react';

interface StepProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step3: React.FC<StepProps> = ({ onNext, onPrev }) => {
  const { watchData, updateWatchData } = useWatch();

  return (
    <div className='p-4 bg-white rounded-lg shadow-md'>
      <div className='m-4 flex justify-between'>
        <button
          onClick={onPrev}
          className='w-56 px-4 py-2 bg-gray-600 text-white font-semibold rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'>
          Previous
        </button>
        <h1 className='text-2xl font-bold text-teal-700 mb-4'>Customise Alerts</h1>

        <button
          onClick={onNext}
          className='w-56 px-4 py-2 bg-teal-600 text-white font-semibold rounded-md shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500'>
          Next
        </button>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Alert Type</label>
        <select
          value={watchData.alertType}
          onChange={(e) => updateWatchData('alertType', e.target.value)}
          className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'>
          <option value='percentage'>Change Percentage</option>
          <option value='words'>Number of Words</option>
        </select>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Set Range</label>
        <input
          type='range'
          value={watchData.alertRange}
          onChange={(e) => updateWatchData('alertRange', parseInt(e.target.value))}
          min='0'
          max='100'
          className='mt-1 block w-full'
        />
      </div>
    </div>
  );
};

export default Step3;
