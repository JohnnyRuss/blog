import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";
const SavedLists = lazy(() => import("@/components/Profile/SavedLists"));

const UserSavedListsPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <SavedLists />
    </SuspenseContainer>
  );
};

export default UserSavedListsPage;
