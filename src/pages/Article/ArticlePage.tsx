import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { useScrollTop } from "@/hooks/utils";

const Article = lazy(() => import("@/components/Article/Article"));

const ArticlePage: React.FC = () => {
  useScrollTop();

  return (
    <SuspenseContainer>
      <Article />
    </SuspenseContainer>
  );
};

export default ArticlePage;
