import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";

const EditProfile = lazy(() => import("@/components/Profile/EditProfile"));

const UserProfileSettingsPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <EditProfile />
    </SuspenseContainer>
  );
};

export default UserProfileSettingsPage;
