/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { userFollowStore } from "@/store";

export default function useGetFollowingUsersQuery() {
  const status = userFollowStore.use.followingUsersStatus();
  const data = userFollowStore.use.followingUsers();
  const get = userFollowStore.use.getFollowingUsers();
  const cleanUp = userFollowStore.use.cleanUpFollowingUsers();

  useEffect(() => {
    get();

    return () => {
      cleanUp();
    };
  }, []);

  return { status, data };
}
