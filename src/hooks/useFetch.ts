import { useEffect, useState } from "react";

interface Response<T> {
    data?: T;
    error: boolean;
    loading: boolean;
}

function useFetch<T>(url: string): Response<T> {
    const [data, setdata] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setdata(data);
          setLoading(false);
        } catch {
          setLoading(false);
          setError(true);
        }
      };
  
      fetchData();
    }, []);
  
    return { data, loading, error };
  }
  

  export default useFetch