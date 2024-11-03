import { userStore } from "@/store";
import { AddUserInterestArgsT } from "@/interface/db/user.types";

export default function useAddUserInterestQuery() {
  const add = userStore.use.addUserInterest();

  const addInterestQuery = async (args: AddUserInterestArgsT) =>
    await add(args);

  return { addInterestQuery };
}
