import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";

const ManageCategories = lazy(
  () => import("@/components/Dashboard/ManageCategories")
);

const ManageCategoriesPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <ManageCategories />
    </SuspenseContainer>
  );
};

export default ManageCategoriesPage;
