import { lazy } from "react";

import { useRestrictUnauthorizedEnterOnPage } from "@/hooks/auth";

import { SuspenseContainer, StandSpinner } from "@/components/Layouts";

const EditProfile = lazy(() => import("@/components/Profile/EditProfile"));

const UserProfileSettingsPage: React.FC = () => {
  const { loading } = useRestrictUnauthorizedEnterOnPage();

  return loading ? (
    <StandSpinner />
  ) : (
    <SuspenseContainer>
      <EditProfile />
    </SuspenseContainer>
  );
};

export default UserProfileSettingsPage;
