import { useWatch } from '@/contexts/WatchCreationContext';
import useAxios from '@/hooks/useAxios';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Step4Props {
  onPrev: () => void;
}

const Step4: React.FC<Step4Props> = ({ onPrev }) => {
  const api = useAxios();
  const router = useRouter();
  const { watchData, updateWatchData, resetWatchData } = useWatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    if (type === 'checkbox') {
      const { checked } = event.target as HTMLInputElement;
      updateWatchData(name as keyof typeof watchData, checked);
    } else {
      updateWatchData(name as keyof typeof watchData, value);
    }
  };

  const submitWatch = async () => {
    const dataToSend = {
      monitorType: watchData.monitorType,
      monitoringType: watchData.monitoringType,
      url: watchData.url,
      tags: watchData.tags,
    };

    try {
      const response = await api.post('/api/v1/watch', dataToSend);
      if (response.status === 201) {
        console.log(response.data);
        const updateSettings = await api.put(`/api/v1/watch/${response.data.uuid}`, {
          time_between_check: watchData.time_between_check,
          time_between_check_use_default: false,
        });
        if (updateSettings.status == 200) {
          resetWatchData();
          router.push('/');
        }
      } else {
        throw new Error('Network response was not ok');
      }

      const result = await response.data;
      console.log('Submission successful', result);
    } catch (error) {
      console.error('Submission failed', error);
    }
  };

  return (
    <div className='bg-white p-6 rounded shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Additional Information</h2>
      <input
        type='text'
        name='watchName'
        placeholder={`watch ${watchData.url}`}
        value={watchData.watchName}
        onChange={handleChange}
        className='w-full px-4 py-2 border rounded-md mb-4'
      />
      <input
        type='text'
        name='tags'
        placeholder='Tags'
        value={watchData.tags}
        onChange={handleChange}
        className='w-full px-4 py-2 border rounded-md mb-4'
      />
      <label className='flex items-center mb-4'>
        <input
          type='checkbox'
          name='emailNotifications'
          checked={watchData.emailNotifications}
          onChange={handleChange}
          className='mr-2'
        />
        Email Notifications
      </label>
      {watchData.emailNotifications && (
        <div className='mb-4'>
          <label className='block text-gray-700'>Max Emails per Day</label>
          <input
            type='number'
            name='maxEmails'
            value={watchData.maxEmails}
            onChange={handleChange}
            className='w-full px-4 py-2 border rounded-md mb-4'
          />
          <div className='text-center'>{watchData.maxEmails} emails per day</div>
        </div>
      )}
      <div className='flex justify-between mt-4'>
        <button onClick={onPrev} className='bg-gray-500 text-white px-4 py-2 rounded-md'>
          Previous
        </button>
        <button
          disabled={!watchData.watchName}
          onClick={submitWatch}
          className={'bg-teal-500 text-white px-4 py-2 rounded-md' + (!watchData.watchName ? ' cursor-not-allowed' : '')}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;
