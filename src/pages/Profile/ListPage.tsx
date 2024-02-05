import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
const List = lazy(() => import("@/components/Profile/List"));

const ListPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <List />
    </SuspenseContainer>
  );
};

export default ListPage;
