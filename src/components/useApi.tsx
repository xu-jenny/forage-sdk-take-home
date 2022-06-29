import { useState, useEffect } from "react";

export const usePost = (url:string, header: any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      
      const fetchData = async () => {
        try {
          const resp = await fetch(url, {
            method: 'POST',
            headers: header
          });
          const data = await resp?.json();
          console.log(data);
          setApiData(data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
  
    return { isLoading, apiData, serverError };
  };