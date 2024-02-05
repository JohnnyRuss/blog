import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
const UserLists = lazy(() => import("@/components/Profile/UserLists"));

const UserListsPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <UserLists />
    </SuspenseContainer>
  );
};

export default UserListsPage;
