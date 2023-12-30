import { lazy } from "react";
const SavedLists = lazy(() => import("@/components/Profile/SavedLists"));

const UserSavedListsPage: React.FC = () => {
  return <SavedLists />;
};

export default UserSavedListsPage;
