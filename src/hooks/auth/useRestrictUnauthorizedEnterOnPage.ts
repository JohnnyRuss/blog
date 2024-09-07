/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { logger } from "@/utils";
import { useCheckIsAuthenticatedUser } from "./";
import { PATHS, DYNAMIC_ROUTES } from "@/config/paths";

export default function useRestrictUnauthorizedEnterOnPage() {
  const navigate = useNavigate();

  const { username } = useParams();
  const [loading, setLoading] = useState(true);

  const { check } = useCheckIsAuthenticatedUser();

  useEffect(() => {
    (async () => {
      try {
        const { isAuthenticatedUser, decodedUser } = await check();

        if (!isAuthenticatedUser) return navigate(PATHS.root_page);
        else if (decodedUser.username !== username)
          return navigate(DYNAMIC_ROUTES.profile_review(decodedUser.username));
      } catch (error) {
        logger(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading };
}
