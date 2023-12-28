import * as Pages from "@/pages";
import { PATHS } from "@/config/paths";
import { RouteT } from "@/interface/config.types";
import { Navigate } from "react-router-dom";

const Routes: Array<RouteT> = [
  {
    path: PATHS.root_page,
    title: "root-page",
    element: <Navigate to={PATHS.home_page} />,
    children: [],
  },
  {
    path: PATHS.home_page,
    title: "home-page",
    element: <Pages.HomePage />,
    children: [],
  },
  {
    path: PATHS.article_page,
    title: "article-page",
    element: <Pages.ArticlePage />,
    children: [],
  },
  {
    path: PATHS.blog_page,
    title: "blog-page",
    element: <Pages.BlogPage />,
    children: [],
  },
  {
    path: PATHS.profile_page,
    title: "profile-page",
    element: <Pages.ProfilePage />,
    children: [],
  },
  {
    path: PATHS.auth_page,
    title: "auth-page",
    element: <Pages.AuthPage />,
    children: [],
  },
  {
    path: PATHS.unknown_page,
    title: "unknown-page",
    element: <Pages.UnknownPage />,
    children: [],
  },
];

export default Routes;
