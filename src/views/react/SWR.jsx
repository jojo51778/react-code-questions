import {useEffect, useState} from 'react';
function useSWR(_key, fetcher) {
  const fetchRes = fetcher();
  const [data, setData] = useState(fetchRes instanceof Promise ? undefined : fetchRes);
  const [error, setError] = useState();
 
  useEffect(() => {
    if (fetchRes instanceof Promise) {
      Promise.resolve(fetchRes)
      .then(res => setData(res))
      .catch(err => setError(err))
    }
  }, []);
  return {data, error};
}

function Swr() {
  const fetcher = () => {
    return Promise.resolve('succeeded');
    //return Promise.reject('err');
  };
  const { data, error } = useSWR('/api', fetcher)
  if (error) return <div>failed</div>
  if (!data) return <div>loading</div>

  return <div>{data}</div>
}
export default Swr;