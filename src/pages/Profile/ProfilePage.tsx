import { lazy, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { PATHS } from "@/config/paths";

const ProfileEl = lazy(() => import("@/components/Profile/Profile"));

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === PATHS.profile_page) navigate(PATHS.profile_lists);
  }, [pathname, navigate]);

  return (
    <ProfileEl>
      <Outlet />
    </ProfileEl>
  );
};

export default ProfilePage;
