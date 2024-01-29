import { Link } from "react-router-dom";

import { PATHS } from "@/config/paths";

type DashboardT = {
  children: React.ReactNode;
};

const Dashboard: React.FC<DashboardT> = ({ children }) => {
  return (
    <div>
      <nav>
        <Link to={PATHS.dashboard_pick_articles_page}>Pick Articles</Link>
        <Link to={PATHS.dashboard_categories_page}>Manage Categories</Link>
      </nav>
      {children}
    </div>
  );
};

export default Dashboard;
