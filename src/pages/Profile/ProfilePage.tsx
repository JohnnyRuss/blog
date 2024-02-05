/* eslint-disable react-hooks/exhaustive-deps */
import { lazy, useEffect } from "react";
import { useLocation, useNavigate, Outlet, useParams } from "react-router-dom";

import { DYNAMIC_ROUTES } from "@/config/paths";
import { useRedirectUnAuthorized } from "@/hooks/auth";
import { useGetUserDetailsQuery } from "@/hooks/api/user";

import { SuspenseContainer } from "@/components/Layouts";
const ProfileEl = lazy(() => import("@/components/Profile/Profile"));

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const { pathname } = useLocation();
  const { loading } = useRedirectUnAuthorized();

  useEffect(() => {
    if (!username) navigate(-1);

    if (window) window.scrollTo({ top: 0, left: 0 });

    const regex = /^\/profile\/([^/]+)$/;

    if (pathname.match(regex))
      navigate(DYNAMIC_ROUTES.profile_review(username));
  }, [pathname, navigate, username]);

  useGetUserDetailsQuery();

  return (
    <SuspenseContainer>
      {!loading && (
        <ProfileEl>
          <Outlet />
        </ProfileEl>
      )}
    </SuspenseContainer>
  );
};

export default ProfilePage;
