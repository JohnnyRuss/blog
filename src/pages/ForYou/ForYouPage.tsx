import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { useScrollTop } from "@/hooks/utils";
import { useRedirectUnAuthorized } from "@/hooks/auth";

const ForYou = lazy(() => import("@/components/ForYou/ForYou"));

type ForYouPageT = {};

const ForYouPage: React.FC<ForYouPageT> = () => {
  useScrollTop();

  const { loading } = useRedirectUnAuthorized();

  return <SuspenseContainer>{!loading && <ForYou />}</SuspenseContainer>;
};

export default ForYouPage;
