/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { userFollowStore } from "@/store";

export default function useWhoToFollowQuery(limit?: number) {
  const { pathname } = useLocation();
  const status = userFollowStore.use.usersToFollowStatus();

  const data = userFollowStore.use.usersToFollow();
  const get = userFollowStore.use.getUsersToFollow();
  const cleanUp = userFollowStore.use.cleanUpUsersToFollow();
  const cleanUpFollowingUsers = userFollowStore.use.cleanUpFollowingUsers();

  useEffect(() => {
    (async () => get(limit))();

    return () => {
      cleanUp();
      cleanUpFollowingUsers();
    };
  }, [pathname]);

  return { status, data };
}
