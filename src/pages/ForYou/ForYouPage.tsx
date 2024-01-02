import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { useScrollTop } from "@/hooks/utils";

const ForYou = lazy(() => import("@/components/ForYou/ForYou"));

type ForYouPageT = {};

const ForYouPage: React.FC<ForYouPageT> = () => {
  useScrollTop();

  return (
    <SuspenseContainer>
      <ForYou />
    </SuspenseContainer>
  );
};

export default ForYouPage;
