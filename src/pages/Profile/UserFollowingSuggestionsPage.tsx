import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
const WhoToFollow = lazy(() => import("@/components/Profile/WhoToFollow"));

const UserFollowingSuggestionsPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <WhoToFollow />
    </SuspenseContainer>
  );
};

export default UserFollowingSuggestionsPage;
