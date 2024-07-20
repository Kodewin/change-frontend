'use client';
import LoaderComponent from '@/components/Loaders/LoaderComponent';
import useAxios from '@/hooks/useAxios';
import { Watch } from '@/types/watch';
import { formatDistanceToNow } from 'date-fns';
import { useEffect, useState } from 'react';
import Wrapper from './Wrapper';

export default function Home() {
  const api = useAxios();
  const [siteUrl, setSiteUrl] = useState('');
  const [watches, setWatches] = useState<Watch[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchWatches = async () => {
    setLoading(true);
    try {
      const response = await api.get('/api/v1/watch');
      const transformedData = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
        last_checked: formatDistanceToNow(new Date(response.data[key].last_checked * 1000), { addSuffix: true }),
        last_changed:
          response.data[key].last_changed != 0
            ? formatDistanceToNow(new Date(response.data[key].last_changed * 1000), { addSuffix: true })
            : 'Not Yet',
      }));
      setWatches(transformedData);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch watches data:', error);
    }
  };

  useEffect(() => {
    fetchWatches();
  }, []);

  const addWatch = async () => {
    try {
      const response = await api.post('/api/v1/watch', { url: siteUrl });
      if (response.status === 201) {
        setSiteUrl('');
        fetchWatches();
      }
    } catch (error) {
      console.error('Failed to add watch:', error);
    }
  };

  const recheck = async (id: string) => {
    try {
      const response = await api.get(`/api/v1/watch/${id}?recheck=1`);
      if (response.status === 200) {
        fetchWatches();
      }
    } catch (error) {
      console.error('Failed to recheck watch:', error);
    }
  };

  const deleteWatch = async (id: string) => {
    try {
      const response = await api.delete(`/api/v1/watch/${id}`);
      if (response.status === 204) {
        fetchWatches();
      }
    } catch (error) {
      console.error('Failed to delete watch:', error);
    }
  };

  return (
    <Wrapper>
      <main className='flex flex-col items-center justify-between'>
        <div className='rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card mx-auto w-full max-w-[970px]'>
          <div className='text-dark dark:text-white p-10'>
            <div className='container'>
              <div className='mb-3 items-center'>
                <p className='text-2xl mb-4'>Add a new change detection watch</p>
                <div className='flex justify-center gap-2'>
                  <input
                    type='url'
                    onChange={(e) => setSiteUrl(e.target.value)}
                    placeholder='https://someurl.com'
                    value={siteUrl}
                    autoFocus
                    className='w-242.5 rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary'
                  />
                  <button onClick={addWatch} className='bg-green text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10'>
                    Watch
                  </button>
                </div>
              </div>

              {watches.length >= 1 ? (
                <table className='w-full table-auto mt-5'>
                  <thead>
                    <tr className='bg-[#F7F9FC] text-left dark:bg-dark-2'>
                      <th className='min-w-[20px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5'>#</th>
                      <th className='min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white'>Websites</th>
                      <th className='px-4 py-4 text-center font-medium text-dark dark:text-white'>Last Checked</th>
                      <th className='px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5'>Last Changed</th>
                      <th className='px-4 py-4 text-center font-medium text-dark dark:text-white xl:pr-7.5'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {watches.map((watch, index) => (
                      <tr key={index}>
                        <td
                          className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === watches.length - 1 ? 'border-b-0' : 'border-b'}`}>
                          <h5 className='text-dark dark:text-white'>{index + 1}</h5>
                          {/* <p className='mt-[3px] text-body-sm font-medium'>${watch.id}</p> */}
                        </td>
                        <td
                          className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === watches.length - 1 ? 'border-b-0' : 'border-b'}`}>
                          <p className='text-dark dark:text-white'>{watch.url}</p>
                        </td>
                        <td
                          className={`border-[#eee] px-4 py-4 text-center dark:border-dark-3 ${index === watches.length - 1 ? 'border-b-0' : 'border-b'}`}>
                          <p>{watch.last_checked}</p>
                        </td>
                        <td
                          className={`border-[#eee] px-4 py-4 text-center dark:border-dark-3 ${index === watches.length - 1 ? 'border-b-0' : 'border-b'}`}>
                          <p>{watch.last_changed}</p>
                        </td>
                        <td
                          className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${index === watches.length - 1 ? 'border-b-0' : 'border-b'}`}>
                          <div className='flex items-center justify-center space-x-3.5'>
                            <button onClick={() => recheck(watch.id)}>
                              <i className='fa-solid fa-arrows-rotate'></i>
                            </button>
                            <button>
                              <i className='fa-solid fa-pen-to-square'></i>
                            </button>
                            <button>
                              <i className='fa-solid fa-code-compare'></i>
                            </button>
                            <button onClick={() => deleteWatch(watch.id)} className='hover:text-red-dark'>
                              <i className='fa-solid fa-trash'></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : !loading ? (
                <div className='flex flex-col items-center justify-center mt-10'>
                  <img className='h-52' src='images/no-data.svg' alt='' />
                  <h2 className='text-xl my-3'>There are no watches here to show</h2>
                </div>
              ) : (
                <div className='mt-10'>
                  <LoaderComponent />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}
