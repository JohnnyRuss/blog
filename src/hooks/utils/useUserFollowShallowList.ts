import { useState, useEffect } from "react";

import { UserDetailsT } from "@/interface/db/user.types";

export default function useUserFollowShallowList(data: Array<UserDetailsT>) {
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
  }, []);

  function checkIsFollowing(user: UserDetailsT): boolean {
    return data.some((candidateUser) => candidateUser._id === user._id);
  }

  return { checkIsFollowing, dataShallow };
}
