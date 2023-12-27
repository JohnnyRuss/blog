import { lazy } from "react";
import { SuspenseContainer, Container } from "@/components/Layouts";

import Navigation from "@/components/Navigation/Navigation";

const Home = lazy(() => import("@/components/Home/Home"));

const HomePage: React.FC = () => {
  return (
    <>
      <SuspenseContainer>
        <Container>
          <Navigation />
          <Home />
        </Container>
      </SuspenseContainer>
    </>
  );
};

export default HomePage;
