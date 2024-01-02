import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";
const Following = lazy(() => import("@/components/Profile/Following"));

const UserFollowingPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <Following />
    </SuspenseContainer>
  );
};

export default UserFollowingPage;
