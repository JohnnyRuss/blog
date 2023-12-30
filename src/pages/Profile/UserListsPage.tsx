import { lazy } from "react";
const UserLists = lazy(() => import("@/components/Profile/UserLists"));

const UserListsPage: React.FC = () => {
  return <UserLists />;
};

export default UserListsPage;
