import { useState } from "react";
import { SuspenseContainer, Container } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";

type AppLayoutT = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutT> = ({ children }) => {
  const [showNav, setShowNav] = useState(true);

  return (
    <Container>
      {showNav && <Navigation />}
      <SuspenseContainer>{children}</SuspenseContainer>
    </Container>
  );
};

export default AppLayout;
