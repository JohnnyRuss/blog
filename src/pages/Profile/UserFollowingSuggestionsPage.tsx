import { lazy } from "react";

import { useRestrictUnauthorizedEnterOnPage } from "@/hooks/auth";

import { SuspenseContainer, StandSpinner } from "@/components/Layouts";

const WhoToFollow = lazy(() => import("@/components/Profile/WhoToFollow"));

const UserFollowingSuggestionsPage: React.FC = () => {
  const { loading } = useRestrictUnauthorizedEnterOnPage();

  return loading ? (
    <StandSpinner />
  ) : (
    <SuspenseContainer>
      <WhoToFollow />
    </SuspenseContainer>
  );
};

export default UserFollowingSuggestionsPage;
