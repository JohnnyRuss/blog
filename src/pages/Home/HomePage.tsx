import { lazy } from "react";

const Home = lazy(() => import("@/components/Home/Home"));

const HomePage: React.FC = () => {
  return <Home />;
};

export default HomePage;
