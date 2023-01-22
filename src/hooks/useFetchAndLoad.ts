/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { AxiosCall } from "@models/AxiosCall";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  let controller: AbortController;

  const callEndpoint = async (axiosCall: AxiosCall<any>) => {
    if (axiosCall.controller) controller = axiosCall.controller;
    setLoading(true);
    let result = {} as AxiosResponse<any>;
    try {
      result = await axiosCall.call;
    } catch (err: any) {
      setLoading(false);
      setError({
        error: true,
        message: err.message,
      });

      return {
        data: {},
        status: err.response ? err.response.status : null,
        statusText: err.response ? err.response.message : "",
      };
    }
    setLoading(false);
    return result;
  };

  const cancelEndpoint = () => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { loading, callEndpoint, error };
};

export default useFetchAndLoad;
