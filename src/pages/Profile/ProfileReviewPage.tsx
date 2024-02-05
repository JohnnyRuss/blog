import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
const Review = lazy(() => import("@/components/Profile/Review"));

const ProfileReviewPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <Review />
    </SuspenseContainer>
  );
};

export default ProfileReviewPage;
