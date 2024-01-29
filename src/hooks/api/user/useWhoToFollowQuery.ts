/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { userStore } from "@/store";

export default function useWhoToFollowQuery() {
  const status = userStore.use.usersToFollowStatus();
  const data = userStore.use.usersToFollow();
  const getUsersToFollow = userStore.use.getUsersToFollow();
  const cleanUpUsersToFollow = userStore.use.cleanUpUsersToFollow();

  useEffect(() => {
    getUsersToFollow();

    return () => {
      cleanUpUsersToFollow();
    };
  }, []);

  return { status, data };
}
