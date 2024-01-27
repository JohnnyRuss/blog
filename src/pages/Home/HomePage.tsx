import { lazy } from "react";

import { useScrollTop } from "@/hooks/utils";

import { SuspenseContainer } from "@/components/Layouts";

const Home = lazy(() => import("@/components/Home/Home"));

const HomePage: React.FC = () => {
  useScrollTop();

  return (
    <SuspenseContainer>
      <Home />
    </SuspenseContainer>
  );
};

export default HomePage;
