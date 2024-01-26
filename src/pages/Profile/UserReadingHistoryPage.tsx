import { lazy } from "react";

import ProfileProvider from "@/Providers/ProfileProvider";

import { SuspenseContainer } from "@/components/Layouts";
const History = lazy(() => import("@/components/Profile/History"));

const UserReadingHistoryPage: React.FC = () => {
  return (
    <ProfileProvider>
      <SuspenseContainer>
        <History />
      </SuspenseContainer>
    </ProfileProvider>
  );
};

export default UserReadingHistoryPage;
