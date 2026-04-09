import {useEffect,useState}from 'react'

function useFetchData<T>(url:string){
     const [data, setData] = useState<T |null >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
      useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => setError(err))
      .finally(() =>  setLoading(false));

  }, [url]);
  return { data,loading,error}
}

export default useFetchData