import { useEffect, useState } from "react";

interface FetchData<T> {
    data?: T;
    error: string;
    loading: boolean;
}

function useFetch<T>(url: string): FetchData<T> {
    const [data, setdata] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setdata(json);
          setLoading(false);
        } catch (error) {
          setError("Something went wrong");
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return { data, loading, error };
  }
  

  export default useFetch