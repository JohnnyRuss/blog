import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";
const Edit = lazy(() => import("@/components/Profile/Edit"));

const UserProfileSettingsPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <Edit />
    </SuspenseContainer>
  );
};

export default UserProfileSettingsPage;
