import { lazy } from "react";
const Auth = lazy(() => import("@/components/Auth/Auth"));

const AuthPage: React.FC = () => {
  return <Auth />;
};

export default AuthPage;
