import { lazy } from "react";

import ProfileProvider from "@/Providers/ProfileProvider";

import { SuspenseContainer } from "@/components/Layouts";
const SavedLists = lazy(() => import("@/components/Profile/SavedLists"));

const UserSavedListsPage: React.FC = () => {
  return (
    <ProfileProvider>
      <SuspenseContainer>
        <SavedLists />
      </SuspenseContainer>
    </ProfileProvider>
  );
};

export default UserSavedListsPage;
