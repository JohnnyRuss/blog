import { lazy } from "react";
const Following = lazy(() => import("@/components/Profile/Following"));

const UserFollowingPage: React.FC = () => {
  return <Following />;
};

export default UserFollowingPage;
