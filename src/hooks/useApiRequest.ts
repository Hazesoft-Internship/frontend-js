"use client";

import axios, { AxiosError, AxiosRequestConfig } from "axios";
import React, { useState } from "react";

type UseApiRequestProps = {
  url: string;
  method: "get" | "post" | "put" | "delete";
  data?: any;
};

type ApiRequest<T> = {
  response: T | [];
  loading: boolean;
  error: AxiosError | null;
  handleRequest: ({ url, method, data }: UseApiRequestProps) => void;
};

const useApiRequest = <T>(): ApiRequest<T> => {
  const [response, setResponse] = useState<T | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const handleRequest = React.useCallback(
    async ({ url, method, data }: UseApiRequestProps) => {
      setLoading(true);
      setError(null);
      try {
        const options: AxiosRequestConfig = {
          url,
          method,
          data,
        };
        const response = await axios(options);
        setResponse(response.data);
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { response, loading, error, handleRequest };
};

export default useApiRequest;
