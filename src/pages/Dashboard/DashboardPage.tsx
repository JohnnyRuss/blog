import { Outlet } from "react-router-dom";
import Dashboard from "@/components/Dashboard/Dashboard";

const DashboardPage: React.FC = () => {
  return (
    <Dashboard>
      <Outlet />
    </Dashboard>
  );
};

export default DashboardPage;
