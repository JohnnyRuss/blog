import { lazy } from "react";
import { SuspenseContainer, Container } from "@/components/Layouts";

import Navigation from "@/components/Navigation/Navigation";
const ForYou = lazy(() => import("@/components/ForYou/ForYou"));

type ForYouPageT = {};

const ForYouPage: React.FC<ForYouPageT> = () => {
  return (
    <Container>
      <Navigation />
      <SuspenseContainer>
        <ForYou />
      </SuspenseContainer>
    </Container>
  );
};

export default ForYouPage;
