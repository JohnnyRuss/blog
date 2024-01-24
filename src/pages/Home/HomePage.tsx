/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { lazy } from "react";

import { homeStore } from "@/store";
import { useScrollTop } from "@/hooks/utils";

import { SuspenseContainer, StandSpinner } from "@/components/Layouts";

const Home = lazy(() => import("@/components/Home/Home"));

const HomePage: React.FC = () => {
  useScrollTop();

  const getHome = homeStore.use.getHome();
  const status = homeStore.use.status();

  useEffect(() => {
    getHome();
  }, []);

  return (
    <SuspenseContainer>
      {status.loading ? <StandSpinner /> : <Home />}
    </SuspenseContainer>
  );
};

export default HomePage;
