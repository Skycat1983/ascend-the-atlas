import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const results = await response.json();
      if (results.error) {
        setError(error);
      } else {
        setResult(results);
      }
      // if (check === "sc") {
      //   setResult(resultx);
      // }
      // if (check === "mc") {
      //   setResult(resultx.results);
      // }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { result, error, loading };
}

export default useFetch;
