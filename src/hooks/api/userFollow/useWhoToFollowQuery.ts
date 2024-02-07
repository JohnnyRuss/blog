/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { userFollowStore } from "@/store";

export default function useWhoToFollowQuery() {
  const status = userFollowStore.use.usersToFollowStatus();

  const data = userFollowStore.use.usersToFollow();
  const get = userFollowStore.use.getUsersToFollow();
  const cleanUp = userFollowStore.use.cleanUpUsersToFollow();

  useEffect(() => {
    (async () => get())();

    return () => {
      cleanUp();
    };
  }, []);

  return { status, data };
}
