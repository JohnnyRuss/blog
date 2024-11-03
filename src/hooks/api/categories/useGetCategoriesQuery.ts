/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";

import { CategoryT } from "@/interface/db/category.types";
import { LoadingStatusT } from "@/interface/store/common.types";

import { logger } from "@/utils";
import { axiosPrivateQuery } from "@/services/axios";

type UseGetCategoriesQueryT = {
  setLimit?: boolean;
  extract?: boolean;
  userbased?: "1" | "-1";
  runOnMount?: boolean;
};

export default function useGetCategoriesQuery({
  setLimit = true,
  userbased = "1",
  extract = false,
  runOnMount = true,
}: UseGetCategoriesQueryT) {
  const [data, setData] = useState<Array<CategoryT>>([]);
  const [status, setStatus] = useState<LoadingStatusT>({
    error: false,
    loading: false,
    message: "",
    status: "IDLE",
  });

  const getCategories = async (search?: string) => {
    try {
      setStatus((prev) => ({ ...prev, status: "PENDING", loading: true }));

      const { data }: AxiosResponse<Array<CategoryT>> =
        await axiosPrivateQuery.get(
          `/categories?userbased=${userbased}${setLimit ? "&limit=6" : ""}${
            search ? `&search=${search}` : ""
          }${extract ? "&extract=1" : ""}`
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
    if (!runOnMount) return;

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

  return { data, status, getCategories };
}
