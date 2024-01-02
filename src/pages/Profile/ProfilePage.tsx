import { lazy, useEffect } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { SuspenseContainer } from "@/components/Layouts";

import { PATHS } from "@/config/paths";

const ProfileEl = lazy(() => import("@/components/Profile/Profile"));

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (window) window.scrollTo({ top: 0, left: 0 });
    if (pathname === PATHS.profile_page) navigate(PATHS.profile_review);
  }, [pathname, navigate]);

  return (
    <SuspenseContainer>
      <ProfileEl>
        <Outlet />
      </ProfileEl>
    </SuspenseContainer>
  );
};

export default ProfilePage;
