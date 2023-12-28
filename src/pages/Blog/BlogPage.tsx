import { lazy } from "react";
import { SuspenseContainer, Container } from "@/components/Layouts";

import Navigation from "@/components/Navigation/Navigation";
const Blog = lazy(() => import("@/components/Blog/Blog"));

const BlogPage: React.FC = () => {
  return (
    <Container>
      <Navigation />
      <SuspenseContainer>
        <Blog />
      </SuspenseContainer>
    </Container>
  );
};

export default BlogPage;
