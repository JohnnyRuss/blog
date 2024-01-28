import { NODE_MODE } from "@/config/env";
import { axiosPrivateQuery } from "@/services/axios";

export default function useUserTraceQuery() {
  const updateTrace = async (target: string) => {
    try {
      if (!target) return;
      await axiosPrivateQuery.post(`/trace?target=${target}`);
    } catch (error) {
      NODE_MODE === "DEV" && console.log(error);
    }
  };

  return updateTrace;
}
