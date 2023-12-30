import { lazy } from "react";
const Article = lazy(() => import("@/components/Article/Article"));

const ArticlePage: React.FC = () => {
  return <Article />;
};

export default ArticlePage;
