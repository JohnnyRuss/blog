/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";

import { CategoryT } from "@/interface/db/category.types";
import { LoadingStatusT } from "@/interface/store/common.types";

import { logger } from "@/utils";
import { axiosPrivateQuery } from "@/services/axios";

export default function useGetCategoriesQuery(userbased: "1" | "-1" = "1") {
  const [data, setData] = useState<Array<CategoryT>>([]);
  const [status, setStatus] = useState<LoadingStatusT>({
    error: false,
    loading: false,
    message: "",
    status: "IDLE",
  });

  const getCategories = async () => {
    try {
      setStatus((prev) => ({ ...prev, status: "PENDING", loading: true }));

      const { data }: AxiosResponse<Array<CategoryT>> =
        await axiosPrivateQuery.get(
          `/categories?userbased=${userbased}&limit=6`
        );

      setData(data);

      setStatus((prev) => ({ ...prev, status: "SUCCESS", loading: false }));
    } catch (error: any) {
      const message = logger(error);

      setStatus((prev) => ({
        ...prev,
        status: "FAIL",
        loading: false,
        error: true,
        message,
      }));
    }
  };

  useEffect(() => {
    getCategories();

    return () => {
      setData(() => []);

      setStatus((prev) => ({
        ...prev,
        status: "IDLE",
        loading: false,
        error: false,
        message: "",
      }));
    };
  }, []);

  return { data, status };
}
