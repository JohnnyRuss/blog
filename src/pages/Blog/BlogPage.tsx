import { lazy } from "react";
const Blog = lazy(() => import("@/components/Blog/Blog"));

const BlogPage: React.FC = () => {
  return <Blog />;
};

export default BlogPage;
