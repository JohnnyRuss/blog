import { lazy } from "react";

import { useRestrictUnauthorizedEnterOnPage } from "@/hooks/auth";

import { SuspenseContainer, StandSpinner } from "@/components/Layouts";

const Following = lazy(() => import("@/components/Profile/Following"));

const UserFollowingPage: React.FC = () => {
  const { loading } = useRestrictUnauthorizedEnterOnPage();

  return loading ? (
    <StandSpinner />
  ) : (
    <SuspenseContainer>
      <Following />
    </SuspenseContainer>
  );
};

export default UserFollowingPage;
