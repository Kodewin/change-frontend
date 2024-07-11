'use client';
import useAxios from '@/helpers/useAxios';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Watch {
  id: string;
  last_changed: number;
  last_checked: number;
  last_error: boolean;
  title: string | null;
  url: string;
  viewed: boolean;
}

export default function Home() {
  const api = useAxios();
  const [siteUrl, setSiteUrl] = useState('');
  const [watches, setWatches] = useState<Watch[]>([]);

  const fetchWatches = async () => {
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
    } catch (error) {
      console.error('Failed to fetch watches data:', error);
    }
  };

  useEffect(() => {
    fetchWatches();
  }, []);

  const addWatch = async () => {
    const response = await api.post('/api/v1/watch', { url: siteUrl });
    if (response.status == 201) {
      setSiteUrl('');
      fetchWatches();
    }
  };
  const recheck = async (id: string) => {
    const response = await api.get(`/api/v1/watch/${id}?recheck=1`);
    if (response.status == 200) {
      fetchWatches();
    }
  };

  const deleteWatch = async (id: string) => {
    const response = await api.delete(`/api/v1/watch/${id}`);
    if(response.status == 204){
      fetchWatches()
    }
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-24'>
      <div className='min-h-screen text-white'>
        <div className='container mx-auto py-12'>
          <div className='mb-8'>
            <p className='text-2xl pb-2'>Add a new change detection watch</p>
            <div className='flex gap-2'>
              <input
                onChange={(e) => setSiteUrl(e.target.value)}
                type='text'
                placeholder='https://...'
                className='w-full p-3 rounded-lg text-black'
                value={siteUrl}
              />
              <button onClick={addWatch} className='px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg'>
                Watch
              </button>
              <button className='px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg'>Edit</button>
            </div>
            <div className='mt-4'>
              <div>
                <label className='mr-2'>
                  <input type='radio' name='detection-type' value='text' className='mr-1' />
                  Webpage Text/HTML, JSON and PDF changes
                </label>
              </div>
              <div>
                <label>
                  <input type='radio' name='detection-type' value='restock' className='mr-1' />
                  Re-stock detection for single product pages
                </label>
              </div>
            </div>
          </div>
          <div className='bg-gray-800 rounded-lg p-6'>
            <div className='flex justify-between items-center border-b border-gray-700 pb-4 mb-4'>
              <h2 className='text-xl'>All</h2>
              <div className='flex space-x-4'>
                <button className='px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg'>Tech news</button>
                <button className='px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg'>changedetection.io</button>
              </div>
            </div>
            <table className='w-full table-auto'>
              <thead>
                <tr className='text-left'>
                  <th className='px-4 py-2'>#</th>
                  <th className='px-4 py-2'>Website</th>
                  <th className='px-4 py-2'>Last Checked</th>
                  <th className='px-4 py-2'>Last Changed</th>
                  <th className='px-4 py-2'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {watches?.map((item, index) => (
                  <tr key={index}>
                    <td className='border px-4 py-2'>{index + 1}</td>
                    <td className='border px-4 py-2'>
                      <a href={item.url} className='text-blue-400'>
                        {item.url}
                      </a>
                    </td>
                    <td className='border px-4 py-2'>{item.last_checked}</td>
                    <td className='border px-4 py-2'>{item.last_changed}</td>
                    <td className='border px-4 py-2 flex space-x-2'>
                      <button onClick={() => recheck(item.id)} className='px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg'>
                        Recheck
                      </button>
                      <button className='px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg'>Edit</button>
                      <Link href={`/diff/${item.id}`} className='px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg'>
                        Diff
                      </Link>
                      <button onClick={() => deleteWatch(item.id)} className='px-3 py-1 bg-red-600 hover:bg-red-700 rounded-lg'>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
