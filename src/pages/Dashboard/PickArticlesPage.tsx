import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";

const PickArticles = lazy(() => import("@/components/Dashboard/PickArticles"));

const PickArticlesPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <PickArticles />
    </SuspenseContainer>
  );
};

export default PickArticlesPage;
