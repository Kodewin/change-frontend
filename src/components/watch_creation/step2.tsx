import React from 'react';
import { useWatch } from '@/contexts/WatchCreationContext';

interface Step2Props {
  onNext: () => void;
  onPrev: () => void;
}

const Step2: React.FC<Step2Props> = ({ onNext, onPrev }) => {
  const { watchData, updateWatchData } = useWatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    if (type === 'range') {
      updateWatchData(name as keyof typeof watchData, Number(value));
    } else {
      updateWatchData(name as keyof typeof watchData, value);
    }
  };

  return (
    <div className='bg-white p-6 rounded shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Alert Settings</h2>
      <div className='mb-4'>
        <label className='block text-gray-700'>Alert Type</label>
        <select name='alertType' value={watchData.alertType} onChange={handleChange} className='w-full px-4 py-2 border rounded-md'>
          <option value='percentage'>Change Percentage</option>
          <option value='words'>Number of Words</option>
        </select>
      </div>
      {watchData.alertType === 'percentage' && (
        <div className='mb-4'>
          <label className='block text-gray-700'>Percentage Range</label>
          <input
            type='range'
            name='alertRange'
            min='1'
            max='100'
            value={watchData.alertRange}
            onChange={handleChange}
            className='w-full'
          />
          <div className='text-center'>{watchData.alertRange}%</div>
        </div>
      )}
      {watchData.alertType === 'words' && (
        <div className='mb-4'>
          <label className='block text-gray-700'>Number of Words</label>
          <input
            type='number'
            name='alertRange'
            value={watchData.alertRange}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-md'
          />
        </div>
      )}
      <div className='flex justify-between mt-4'>
        <button onClick={onPrev} className='bg-gray-500 text-white px-4 py-2 rounded-md'>
          Previous
        </button>
        <button onClick={onNext} className='bg-teal-500 text-white px-4 py-2 rounded-md'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
