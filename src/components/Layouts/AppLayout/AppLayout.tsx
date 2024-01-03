import { useLocation } from "react-router-dom";
import { Container } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";

type AppLayoutT = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutT> = ({ children }) => {
  const { pathname } = useLocation();

  const showNav = !pathname.includes("auth");

  return (
    <Container>
      {showNav && <Navigation />}
      {children}
    </Container>
  );
};

export default AppLayout;
