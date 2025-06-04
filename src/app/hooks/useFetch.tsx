"use client";

import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

type UseFetchProps = {
  url: string;
  method: "get" | "post" | "put" | "delete";
  data: any;
  trigger: boolean;
};

const useFetch = ({ url, method, data, trigger }: UseFetchProps) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    if (!trigger) return;

    const handleAPI = async () => {
      try {
        const options = {
          url: url,
          method: method,
          data: data,
        };
        const response = await axios(options);

        setResponse(response.data);
      } catch (error) {
        setError(error as AxiosError);
      } finally {
        setLoading(false);
      }
    };
    handleAPI();
  }, [trigger]);

  return { response, loading, error };
};

export default useFetch;
