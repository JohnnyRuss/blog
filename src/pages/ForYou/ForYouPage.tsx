import { lazy } from "react";
const ForYou = lazy(() => import("@/components/ForYou/ForYou"));

type ForYouPageT = {};

const ForYouPage: React.FC<ForYouPageT> = () => {
  return <ForYou />;
};

export default ForYouPage;
