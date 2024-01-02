import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { useScrollTop } from "@/hooks/utils";

const Auth = lazy(() => import("@/components/Auth/Auth"));

const AuthPage: React.FC = () => {
  useScrollTop();

  return (
    <SuspenseContainer>
      <Auth />
    </SuspenseContainer>
  );
};

export default AuthPage;
