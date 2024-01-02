import { Container } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";

type AppLayoutT = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutT> = ({ children }) => {
  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default AppLayout;
