import { userStore } from "@/store";
import { RemoveUserInterestArgsT } from "@/interface/db/user.types";

export default function useRemoveUserInterestQuery() {
  const remove = userStore.use.removeUserInterest();

  const removeInterestQuery = async (args: RemoveUserInterestArgsT) =>
    await remove(args);

  return { removeInterestQuery };
}
