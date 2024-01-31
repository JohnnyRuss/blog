import { Link } from "react-router-dom";

import { PATHS } from "@/config/paths";

import * as Styled from "./styles/dashboard.styled";

type DashboardT = {
  children: React.ReactNode;
};

const Dashboard: React.FC<DashboardT> = ({ children }) => {
  return (
    <Styled.Dashboard>
      <nav className="dashboard-nav">
        <Link to={PATHS.dashboard_pick_articles_page}>Pick Articles</Link>
        <Link to={PATHS.dashboard_categories_page}>Manage Categories</Link>
      </nav>

      <div className="dashboard-content__box">{children}</div>
    </Styled.Dashboard>
  );
};

export default Dashboard;
