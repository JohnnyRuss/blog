/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { userStore } from "@/store";

export default function useGetUserDetailsQuery() {
  const { username } = useParams();

  const data = userStore.use.userDetails();
  const get = userStore.use.getUserDetails();
  const status = userStore.use.detailsStatus();
  const cleanUp = userStore.use.cleanUpUserDetails();

  useEffect(() => {
    if (!username) return;

    (async () => await get({ username }))();

    return () => {
      cleanUp();
    };
  }, [username]);

  return { data, status };
}
