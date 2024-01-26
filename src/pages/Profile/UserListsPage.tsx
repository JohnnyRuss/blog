import { lazy } from "react";

import ProfileProvider from "@/Providers/ProfileProvider";

import { SuspenseContainer } from "@/components/Layouts";
const UserLists = lazy(() => import("@/components/Profile/UserLists"));

const UserListsPage: React.FC = () => {
  return (
    <ProfileProvider>
      <SuspenseContainer>
        <UserLists />
      </SuspenseContainer>
    </ProfileProvider>
  );
};

export default UserListsPage;
