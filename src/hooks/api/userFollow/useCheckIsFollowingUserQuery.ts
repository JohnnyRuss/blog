/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { AxiosResponse } from "axios";

import { useCheckIsAuthenticatedUser } from "@/hooks/auth";
import { axiosPrivateQuery } from "@/services/axios";
import { logger } from "@/utils";

export default function useCheckIsFollowingUserQuery(candidateUserId?: string) {
  const [isFollowingUser, setIsFollowingUser] = useState<boolean>(false);

  const { isAuthenticated } = useCheckIsAuthenticatedUser(true);

  const check = async (userId?: string) => {
    try {
      const { data }: AxiosResponse<{ isFollowing: boolean }> =
        await axiosPrivateQuery.get(
          `/follow/${userId || candidateUserId}/check`
        );

      setIsFollowingUser(data.isFollowing);
    } catch (error) {
      logger(error);
    }
  };

  useEffect(() => {
    if (!isAuthenticated || !candidateUserId) return;

    check();

    return () => {
      setIsFollowingUser(false);
    };
  }, [isAuthenticated, candidateUserId]);

  return { isFollowingUser, check };
}
