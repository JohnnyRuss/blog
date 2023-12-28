import { lazy } from "react";
import { SuspenseContainer, Container } from "@/components/Layouts";

import Navigation from "@/components/Navigation/Navigation";
const Auth = lazy(() => import("@/components/Auth/Auth"));

const AuthPage: React.FC = () => {
  return (
    <Container>
      <Navigation />
      <SuspenseContainer>
        <Auth />
      </SuspenseContainer>
    </Container>
  );
};

export default AuthPage;
