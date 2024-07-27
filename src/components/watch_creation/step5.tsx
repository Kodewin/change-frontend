// Step5.tsx
import { useWatch } from '@/contexts/WatchCreationContext';
import React from 'react';


interface StepProps {
  onNext: () => void;
  onPrev: () => void;
}

const Step5: React.FC<StepProps> = ({ onNext, onPrev }) => {
  const { watchData, updateWatchData } = useWatch();

  return (
    <div className='p-4 bg-white rounded-lg shadow-md'>
      <div className='m-4 flex justify-between'>
        <button
          onClick={onPrev}
          className='w-56 px-4 py-2 bg-gray-600 text-white font-semibold rounded-md shadow hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'>
          Previous
        </button>
        <h1 className='text-2xl font-bold text-teal-700 mb-4'>Watch Settings</h1>

        <button
          onClick={onNext}
          className='w-56 px-4 py-2 bg-teal-600 text-white font-semibold rounded-md shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500'>
          Finish
        </button>
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Watch Name</label>
        <input
          type='text'
          value={watchData.watchName}
          onChange={(e) => updateWatchData('watchName', e.target.value)}
          className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-gray-700'>Tags</label>
        <input
          type='text'
          value={watchData.tags}
          onChange={(e) => updateWatchData('tags', e.target.value)}
          className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'
        />
      </div>
      <div className='flex mb-4'>
        <label className='block text-gray-700'>Email Notifications</label>
        <input
          type='checkbox'
          checked={watchData.emailNotifications}
          onChange={(e) => updateWatchData('emailNotifications', e.target.checked)}
          className='mr-2 leading-tight'
        />
        {watchData.emailNotifications && (
          <div className='mt-4'>
            <label className='block text-gray-700'>Max Number of Emails</label>
            <input
              type='number'
              value={watchData.maxEmails}
              onChange={(e) => updateWatchData('maxEmails', parseInt(e.target.value))}
              className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Step5;
