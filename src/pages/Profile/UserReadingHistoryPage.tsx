import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";
const History = lazy(() => import("@/components/Profile/History"));

const UserReadingHistoryPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <History />
    </SuspenseContainer>
  );
};

export default UserReadingHistoryPage;
