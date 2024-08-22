import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
const Articles = lazy(() => import("@/components/Profile/Articles"));

const UserArticlesPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <Articles />
    </SuspenseContainer>
  );
};

export default UserArticlesPage;
