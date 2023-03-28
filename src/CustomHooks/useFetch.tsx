import React, { useEffect, useState } from "react";
import { ErrorInterface } from "../Utils/types";

type Url = string;

function useFetch<T>(url: Url) {
  const [result, setResult] = useState<T | null>(null);
  const [error, setError] = useState<ErrorInterface | null>(null);
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
      setError(error as ErrorInterface);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { result, error, loading };
}

export default useFetch;
