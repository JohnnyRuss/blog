/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { userFollowStore } from "@/store";

export default function useWhoToFollowQuery() {
  const status = userFollowStore.use.usersToFollowStatus();
  const data = userFollowStore.use.usersToFollow();
  const getUsersToFollow = userFollowStore.use.getUsersToFollow();
  const cleanUpUsersToFollow = userFollowStore.use.cleanUpUsersToFollow();

  useEffect(() => {
    getUsersToFollow();

    return () => {
      cleanUpUsersToFollow();
    };
  }, []);

  return { status, data };
}
