import { useEffect, useState } from "react";

interface Response<T> {
    data?: T;
    error: string;
    loading: boolean;
}

function useFetch<T>(url: string): Response<T> {
    const [data, setdata] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setdata(data);
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