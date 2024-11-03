import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { UserDetailsT } from "@/interface/db/user.types";

export default function useUserFollowShallowList(data: Array<UserDetailsT>) {
  const { pathname } = useLocation();

  const [dataShallow, setDataShallow] = useState<Array<UserDetailsT>>([]);

  useEffect(() => {
    setDataShallow((prev) => [
      ...prev,
      ...data.filter(
        (user) => !prev.some((shallowUser) => user._id === shallowUser._id)
      ),
    ]);
  }, [data]);

  useEffect(() => {
    return () => {
      setDataShallow(() => []);
    };
  }, [pathname, data]);

  function checkIsFollowing(user: UserDetailsT): boolean {
    return data.some((candidateUser) => candidateUser._id === user._id);
  }

  return { checkIsFollowing, dataShallow };
}
