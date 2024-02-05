/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { userStore } from "@/store";

export default function useGetUserDetailsQuery() {
  const { username } = useParams();

  const status = userStore.use.detailsStatus();
  const data = userStore.use.userDetails();
  const get = userStore.use.getUserDetails();
  const cleanUp = userStore.use.cleanUpUserDetails();

  useEffect(() => {
    if (!username) return;

    get({ username });

    return () => {
      cleanUp();
    };
  }, [username]);

  return { data, status };
}
