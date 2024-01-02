import Routes from "./Routes";
import { AppLayout } from "./components/Layouts";
import ErrorBoundary from "./ErrorBoundary";

const App: React.FC = () => {
  return (
    <ErrorBoundary fallback={<div>Ocurred Error</div>}>
      <AppLayout>
        <Routes />
      </AppLayout>
    </ErrorBoundary>
  );
};

export default App;
