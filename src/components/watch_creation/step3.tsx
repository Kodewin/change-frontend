import { useWatch } from '@/contexts/WatchCreationContext';
import React from 'react';

interface Step3Props {
  onNext: () => void;
  onPrev: () => void;
}

const Step3: React.FC<Step3Props> = ({ onNext, onPrev }) => {
  const { watchData, updateWatchData } = useWatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const parsedValue = parseInt(value, 10);

    // Prevent negative values
    const updatedValue = parsedValue < 0 ? 0 : parsedValue;

    // Update the watchData with the new value
    const updatedTimeBetweenCheck = {
      ...watchData.time_between_check,
      [name]: value ? updatedValue : null,
    };

    // Check if all values are zero, reset to default value (3 hours)
    if (
      !updatedTimeBetweenCheck.weeks &&
      !updatedTimeBetweenCheck.days &&
      !updatedTimeBetweenCheck.hours &&
      !updatedTimeBetweenCheck.minutes &&
      !updatedTimeBetweenCheck.seconds
    ) {
      updatedTimeBetweenCheck.hours = 3;
    }

    updateWatchData('time_between_check', updatedTimeBetweenCheck);
  };

  return (
    <div className='bg-white p-6 rounded shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Frequency Settings</h2>
      <div className='flex space-x-4'>
        <div className='mb-4'>
          <label className='block text-gray-700'>Weeks</label>
          <input
            required
            type='number'
            name='weeks'
            value={watchData.time_between_check.weeks ?? 0}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Days</label>
          <input
            required
            type='number'
            name='days'
            value={watchData.time_between_check.days ?? 0}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Hours</label>
          <input
            required
            type='number'
            name='hours'
            value={watchData.time_between_check.hours ?? 0}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Minutes</label>
          <input
            type='number'
            name='minutes'
            value={watchData.time_between_check.minutes ?? 0}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Seconds</label>
          <input
            type='number'
            name='seconds'
            value={watchData.time_between_check.seconds ?? 0}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-md'
          />
        </div>
      </div>
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

export default Step3;
