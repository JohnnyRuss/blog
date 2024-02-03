import { lazy } from "react";

import ProfileProvider from "@/Providers/ProfileProvider";

import { SuspenseContainer } from "@/components/Layouts";

const EditProfile = lazy(() => import("@/components/Profile/EditProfile"));

const UserProfileSettingsPage: React.FC = () => {
  return (
    <ProfileProvider>
      <SuspenseContainer>
        <EditProfile />
      </SuspenseContainer>
    </ProfileProvider>
  );
};

export default UserProfileSettingsPage;
