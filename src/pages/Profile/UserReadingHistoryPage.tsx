import { lazy } from "react";

import ProfileProvider from "@/Providers/ProfileProvider";

import { SuspenseContainer } from "@/components/Layouts";
const ReadingHistory = lazy(
  () => import("@/components/Profile/ReadingHistory")
);

const UserReadingHistoryPage: React.FC = () => {
  return (
    <ProfileProvider>
      <SuspenseContainer>
        <ReadingHistory />
      </SuspenseContainer>
    </ProfileProvider>
  );
};

export default UserReadingHistoryPage;
