import { lazy } from "react";

import { useRestrictUnauthorizedEnterOnPage } from "@/hooks/auth";

import { SuspenseContainer, StandSpinner } from "@/components/Layouts";

const ReadingHistory = lazy(
  () => import("@/components/Profile/ReadingHistory")
);

const UserReadingHistoryPage: React.FC = () => {
  const { loading } = useRestrictUnauthorizedEnterOnPage();

  return loading ? (
    <StandSpinner />
  ) : (
    <SuspenseContainer>
      <ReadingHistory />
    </SuspenseContainer>
  );
};

export default UserReadingHistoryPage;
