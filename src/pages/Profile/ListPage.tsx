import { lazy } from "react";

import ProfileProvider from "@/Providers/ProfileProvider";

import { SuspenseContainer } from "@/components/Layouts";
const List = lazy(() => import("@/components/Profile/List"));

const ListPage: React.FC = () => {
  return (
    <ProfileProvider>
      <SuspenseContainer>
        <List />
      </SuspenseContainer>
    </ProfileProvider>
  );
};

export default ListPage;
