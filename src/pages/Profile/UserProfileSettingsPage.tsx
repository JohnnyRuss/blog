import { lazy } from "react";

import ProfileProvider from "@/Providers/ProfileProvider";

import { SuspenseContainer } from "@/components/Layouts";

const Edit = lazy(() => import("@/components/Profile/Edit"));

const UserProfileSettingsPage: React.FC = () => {
  return (
    <ProfileProvider>
      <SuspenseContainer>
        <Edit />
      </SuspenseContainer>
    </ProfileProvider>
  );
};

export default UserProfileSettingsPage;
