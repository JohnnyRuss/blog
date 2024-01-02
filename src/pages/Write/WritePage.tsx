import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

const Write = lazy(() => import("@/components/Write/Write"));

const WritePage: React.FC = () => {
  return (
    <SuspenseContainer>
      <Write />
    </SuspenseContainer>
  );
};

export default WritePage;
