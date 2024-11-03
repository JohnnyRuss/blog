import { LoadingStatusT } from "@/interface/store/common.types";
import { axiosPrivateQuery } from "@/services/axios";
import { logger } from "@/utils";
import { useState } from "react";

export default function useSaveUserInterestsConfig(onDone: () => void) {
  const [saveStatus, setSaveStatus] = useState<LoadingStatusT>({
    message: "",
    error: false,
    loading: false,
    status: "IDLE",
  });

  const saveChangesQuery = async (data: Array<string>) => {
    try {
      setSaveStatus({
        error: false,
        status: "PENDING",
        loading: true,
        message: "",
      });

      await axiosPrivateQuery.post("/trace/interests", { categories: data });

      onDone();

      setSaveStatus({
        error: false,
        status: "SUCCESS",
        loading: false,
        message: "",
      });
    } catch (error) {
      const message = logger(error);

      setSaveStatus({
        error: true,
        status: "FAIL",
        loading: false,
        message: message,
      });
    }
  };

  return { saveChangesQuery, saveStatus };
}
