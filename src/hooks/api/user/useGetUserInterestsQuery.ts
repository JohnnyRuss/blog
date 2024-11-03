/* eslint-disable react-hooks/exhaustive-deps */
import { userStore } from "@/store";
import { useEffect } from "react";

export default function useGetUserInterestsQuery() {
  const get = userStore.use.getUserInterests();
  const cleanUp = userStore.use.cleanUpInterests();
  const data = userStore.use.interests();
  const status = userStore.use.getInterestsStatus();

  const getInterestsQuery = async () => await get();

  useEffect(() => {
    getInterestsQuery();

    return () => {
      cleanUp();
    };
  }, []);

  return { data, status };
}
