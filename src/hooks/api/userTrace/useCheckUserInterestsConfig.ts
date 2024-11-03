import { AxiosResponse } from "axios";
import { axiosPrivateQuery } from "@/services/axios";

export default function useCheckUserInterestsConfig() {
  const check = async () => {
    const {
      data: { hasAddedInterests, isConfigured },
    }: AxiosResponse<{ isConfigured: boolean; hasAddedInterests: boolean }> =
      await axiosPrivateQuery.post(`/trace/interests/check`);

    return { hasAddedInterests, isConfigured };
  };

  return { check };
}
