import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
const ReadingHistory = lazy(
  () => import("@/components/Profile/ReadingHistory")
);

const UserReadingHistoryPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <ReadingHistory />
    </SuspenseContainer>
  );
};

export default UserReadingHistoryPage;
