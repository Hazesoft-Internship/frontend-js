"use client";

import axios, { AxiosError, AxiosRequestConfig } from "axios";
import React, { useState } from "react";

type UseApiRequestProps = {
  url: string;
  method: "get" | "post" | "put" | "delete";
  data?: any;
};

type ApiRequest = {
  loading: boolean;
  error: AxiosError | null;
  handleRequest: ({ url, method, data }: UseApiRequestProps) => Promise<any>;
};

const useApiRequest = (): ApiRequest => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  const handleRequest = React.useCallback(
    async ({ url, method, data }: UseApiRequestProps) => {
      try {
        const options: AxiosRequestConfig = {
          url,
          method,
          data,
        };
        const response = await axios(options);
        return response.data;
      } catch (err) {
        setError(err as AxiosError);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { loading, error, handleRequest };
};

export default useApiRequest;
