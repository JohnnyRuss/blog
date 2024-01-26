import { lazy } from "react";

import ProfileProvider from "@/Providers/ProfileProvider";

import { SuspenseContainer } from "@/components/Layouts";
const Review = lazy(() => import("@/components/Profile/Review"));

const ProfileReviewPage: React.FC = () => {
  return (
    <ProfileProvider>
      <SuspenseContainer>
        <Review />
      </SuspenseContainer>
    </ProfileProvider>
  );
};

export default ProfileReviewPage;
