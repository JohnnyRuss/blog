import { lazy } from "react";
const Edit = lazy(() => import("@/components/Profile/Edit"));

const UserProfileSettingsPage: React.FC = () => {
  return <Edit />;
};

export default UserProfileSettingsPage;
