import { lazy } from "react";
import { SuspenseContainer, Container } from "@/components/Layouts";

import Navigation from "@/components/Navigation/Navigation";
const Profile = lazy(() => import("@/components/Profile/Profile"));

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Navigation />
      <SuspenseContainer>
        <Profile />
      </SuspenseContainer>
    </Container>
  );
};

export default ProfilePage;
