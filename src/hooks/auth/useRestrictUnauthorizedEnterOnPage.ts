/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useCheckIsAuthenticatedUser } from "./";
import { PATHS, DYNAMIC_ROUTES } from "@/config/paths";

export default function useRestrictUnauthorizedEnterOnPage() {
  const navigate = useNavigate();

  const { username } = useParams();
  const [loading, setLoading] = useState(true);

  const { check } = useCheckIsAuthenticatedUser();

  useEffect(() => {
    const { isAuthenticatedUser, decodedUser } = check();

    if (!isAuthenticatedUser) return navigate(PATHS.root_page);
    else if (decodedUser.username !== username)
      return navigate(DYNAMIC_ROUTES.profile_review(decodedUser.username));

    setLoading(false);
  }, []);

  return { loading };
}
