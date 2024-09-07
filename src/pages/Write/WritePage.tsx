import { lazy } from "react";

import { useRedirectUnAuthorized } from "@/hooks/auth";

import { SuspenseContainer, StandSpinner } from "@/components/Layouts";

const Write = lazy(() => import("@/components/Write/Write"));

const WritePage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

  return loading ? (
    <StandSpinner />
  ) : (
    <SuspenseContainer>
      <Write />
    </SuspenseContainer>
  );
};

export default WritePage;
