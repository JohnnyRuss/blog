import { lazy } from "react";
const History = lazy(() => import("@/components/Profile/History"));

const UserReadingHistoryPage: React.FC = () => {
  return <History />;
};

export default UserReadingHistoryPage;
