import { lazy } from "react";

import ProfileProvider from "@/Providers/ProfileProvider";

import { SuspenseContainer } from "@/components/Layouts";
const Following = lazy(() => import("@/components/Profile/Following"));

const UserFollowingPage: React.FC = () => {
  return (
    <ProfileProvider>
      <SuspenseContainer>
        <Following />
      </SuspenseContainer>
    </ProfileProvider>
  );
};

export default UserFollowingPage;
