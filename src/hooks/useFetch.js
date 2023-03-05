import React, { useCallback, useState } from 'react'

const useFetch = () => {
    const [data,setData] = useState();
    const [error,setError] = useState();
    const [loading,setLoading] = useState();

    const request  = useCallback(async (url,options = null) => {
        let response;
        let data;
        try {
            setError(null);
            setLoading(true);
            response = await fetch(url,options);
            data = await response.json();
            if(!response.ok) throw new Error(data.message);
        } catch (error) {
            setError(error.message);
        } finally {
            setData(data);
            setLoading(false);
            return {response,data};
        }
    });

  return {
    data,loading,error,request
  }
}

export default useFetch