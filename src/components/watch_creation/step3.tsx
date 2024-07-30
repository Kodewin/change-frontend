import React from 'react';
import { useWatch } from '@/contexts/WatchCreationContext';

interface Step3Props {
  onNext: () => void;
  onPrev: () => void;
}

const Step3: React.FC<Step3Props> = ({ onNext, onPrev }) => {
  const { watchData, updateWatchData } = useWatch();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    updateWatchData(name as keyof typeof watchData, value);
  };

  return (
    <div className='bg-white p-6 rounded shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Frequency Settings</h2>
      <div className='mb-4'>
        <label className='block text-gray-700'>Frequency</label>
        <select
          required
          name='frequency'
          value={watchData.frequency}
          onChange={handleChange}
          className='w-full px-4 py-2 border rounded-md'>
          <optgroup label='Free'>
            <option value='monthly'>Once every month</option>
            <option value='weekly'>Once every week</option>
            <option value='every5days'>Every 5 days</option>
            <option value='daily'>Check every day</option>
            <option value='every12hours'>Every 12 hours</option>
          </optgroup>
          <optgroup label='Premium'>
            <option value='every6hours'>Every 6 hours</option>
            <option value='every3hours'>Every 3 hours</option>
            <option value='hourly'>Every hour</option>
            <option value='every30minutes'>Every 30 minutes</option>
            <option value='every20minutes'>Every 20 minutes</option>
            <option value='every10minutes'>Every 10 minutes</option>
          </optgroup>
        </select>
      </div>
      <div className='flex justify-between mt-4'>
        <button onClick={onPrev} className='bg-gray-500 text-white px-4 py-2 rounded-md'>
          Previous
        </button>
        <button
          disabled={!watchData.frequency}
          onClick={onNext}
          className={'bg-teal-500 text-white px-4 py-2 rounded-md' + (!watchData.frequency ? ' cursor-not-allowed' : '')}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;
