import { logger } from "@/utils";
import { axiosPrivateQuery } from "@/services/axios";

export default function useUserTraceQuery() {
  const updateTrace = async (target: string) => {
    try {
      if (!target) return;
      await axiosPrivateQuery.post(`/trace?target=${target}`);
    } catch (error) {
      logger(error);
    }
  };

  return updateTrace;
}
