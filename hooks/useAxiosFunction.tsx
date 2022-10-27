import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

interface CustomConfig {
  url: string;
  method?: string;
  config?: AxiosRequestConfig;
  open?: boolean;
}

const BASE_URL = 'https://int.logifleet360.ch/lfr3/eg-services/';

const LFAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

function useAxiosFunction<T>(): [({ url, method, config, open }: CustomConfig) => void, string, boolean, T?] {
  const [response, setResponse] = useState<T>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState<AbortController>();

  async function fetch({ url, method = 'GET', open = false, config = {} }: CustomConfig) {
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      if (!open) {
        config.headers = {
          'X-LFR-MOBILEAPPKEY': 'ff4cfef3-a7de-4d4f-85be-42d55ce07895',
          'X-LFR-USERID': 'ff0f6d81-b9a4-442d-af86-7aa285cb9492',
        };
      }
      const res = await LFAxios({
        url: url,
        method: method.toLowerCase(),
        ...config,
      });
      setResponse(res.data);
    } catch (err: any | AxiosError) {
      if (axios.isAxiosError(err)) {
        setError(err.message);
      } else {
        console.log(err);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    return () => controller?.abort();
  }, [controller]);

  return [fetch, error, loading, response];
}

export default useAxiosFunction;
