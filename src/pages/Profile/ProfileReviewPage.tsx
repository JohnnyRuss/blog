import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

type ProfileReviewPageT = {};

const Review = lazy(() => import("@/components/Profile/Review"));

const ProfileReviewPage: React.FC<ProfileReviewPageT> = () => {
  return (
    <SuspenseContainer>
      <Review />
    </SuspenseContainer>
  );
};

export default ProfileReviewPage;
