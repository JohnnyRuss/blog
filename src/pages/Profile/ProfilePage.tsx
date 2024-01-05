import { lazy, useEffect } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { SuspenseContainer } from "@/components/Layouts";

import { PATHS } from "@/config/paths";
import { useRedirectUnAuthorized } from "@/hooks/auth";

const ProfileEl = lazy(() => import("@/components/Profile/Profile"));

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { loading } = useRedirectUnAuthorized();

  useEffect(() => {
    if (window) window.scrollTo({ top: 0, left: 0 });
    if (pathname === PATHS.profile_page) navigate(PATHS.profile_review);
  }, [pathname, navigate]);

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
