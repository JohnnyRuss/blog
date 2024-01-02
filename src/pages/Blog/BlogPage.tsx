import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { useScrollTop } from "@/hooks/utils";

const Blog = lazy(() => import("@/components/Blog/Blog"));

const BlogPage: React.FC = () => {
  useScrollTop();

  return (
    <SuspenseContainer>
      <Blog />
    </SuspenseContainer>
  );
};

export default BlogPage;
