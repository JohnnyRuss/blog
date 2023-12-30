import Routes from "./Routes";
import { AppLayout } from "./components/Layouts";

const App: React.FC = () => {
  return (
    <AppLayout>
      <Routes />
    </AppLayout>
  );
};

export default App;
