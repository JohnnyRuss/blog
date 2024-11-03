/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ADMINISTRATOR_ROLE } from "@/config/env";

import { PATHS } from "@/config/paths";
import useCheckIsAuthenticatedUser from "./useCheckIsAuthenticatedUser";

export default function useRedirectUser() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const { check } = useCheckIsAuthenticatedUser();

  useEffect(() => {
    const { isAuthenticatedUser, decodedUser } = check();

    if (!isAuthenticatedUser || decodedUser?.role !== ADMINISTRATOR_ROLE)
      navigate(PATHS.root_page);

    setLoading(false);
  }, []);

  return { loading };
}
