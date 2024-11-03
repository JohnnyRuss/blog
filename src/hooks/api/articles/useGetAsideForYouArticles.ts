import { GetAllArticlesResponseT } from "@/interface/db/article.types";
import { LoadingStatusT } from "@/interface/store/common.types";
import { axiosPrivateQuery } from "@/services/axios";
import { logger } from "@/utils";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export default function useGetAsideForYouArticles(runOnMount: boolean = false) {
  const [data, setData] = useState<GetAllArticlesResponseT["data"]>([]);
  const [status, setStatus] = useState<LoadingStatusT>({
    error: false,
    loading: false,
    message: "",
    status: "IDLE",
  });

  const get = async () => {
    try {
      setStatus((prev) => ({
        ...prev,
        error: false,
        loading: true,
        message: "",
        status: "PENDING",
      }));

      const { data }: AxiosResponse<GetAllArticlesResponseT> =
        await axiosPrivateQuery.get(
          `/articles?page=1&limit=4&userbased=1&sort=-common,-createdAt,-views`
        );

      setData(() => data.data);

      setStatus((prev) => ({
        ...prev,
        error: false,
        loading: false,
        message: "",
        status: "SUCCESS",
      }));
    } catch (error) {
      const message = logger(error);

      setStatus((prev) => ({
        ...prev,
        error: true,
        loading: false,
        message: message,
        status: "FAIL",
      }));
    }
  };

  useEffect(() => {
    if (!runOnMount) return;

    get();

    return () => {
      setData(() => []);
    };
  }, [runOnMount]);

  return { data, status };
}
