import { lazy } from "react";
import { SuspenseContainer, Container } from "@/components/Layouts";

import Navigation from "@/components/Navigation/Navigation";
const Article = lazy(() => import("@/components/Article/Article"));

const ArticlePage: React.FC = () => {
  return (
    <Container>
      <Navigation />
      <SuspenseContainer>
        <Article />
      </SuspenseContainer>
    </Container>
  );
};

export default ArticlePage;
