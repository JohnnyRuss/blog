import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { useScrollTop } from "@/hooks/utils";

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
