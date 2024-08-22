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
    path: PATHS.blog_page,
    title: "blog-page",
    element: <Pages.BlogPage />,
    children: [],
  },
  {
    path: PATHS.article_page,
    title: "article-page",
    element: <Pages.ArticlePage />,
    children: [],
  },
  {
    path: PATHS.for_you_page,
    title: "for-you-page",
    element: <Pages.ForYouPage />,
    children: [],
  },
  {
    path: PATHS.write,
    title: "write-page",
    element: <Pages.WritePage />,
    children: [],
  },

  // PROFILE
  {
    path: PATHS.profile_page,
    title: "profile-page",
    element: <Pages.ProfilePage />,
    children: [
      {
        path: PATHS.profile_review,
        title: "profile-review-page",
        element: <Pages.ProfileReviewPage />,
        children: [],
      },
      {
        path: PATHS.profile_articles,
        title: "profile-articles-page",
        element: <Pages.UserArticlesPage />,
        children: [],
      },
      {
        path: PATHS.profile_lists,
        title: "profile-lists-page",
        element: <Pages.UserListsPage />,
        children: [],
      },
      {
        path: PATHS.profile_list,
        title: "profile-list-page",
        element: <Pages.ListPage />,
        children: [],
      },
      {
        path: PATHS.profile_saved_lists,
        title: "profile-saved-lists-page",
        element: <Pages.UserSavedListsPage />,
        children: [],
      },
      {
        path: PATHS.profile_history,
        title: "profile-history-page",
        element: <Pages.UserReadingHistoryPage />,
        children: [],
      },
      {
        path: PATHS.profile_following,
        title: "profile-following-page",
        element: <Pages.UserFollowingPage />,
        children: [],
      },
      {
        path: PATHS.profile_following_suggestions,
        title: "profile-following-suggestions-page",
        element: <Pages.UserFollowingSuggestionsPage />,
        children: [],
      },
    ],
  },
  {
    path: PATHS.profile_settings,
    title: "profile-settings-page",
    element: <Pages.UserProfileSettingsPage />,
    children: [],
  },

  // AUTH
  {
    path: PATHS.auth_page,
    title: "auth-page",
    element: <Pages.AuthPage />,
    children: [
      {
        path: PATHS.login_page,
        title: "auth-login-page",
        element: <Pages.LoginPage />,
        children: [],
      },
      {
        path: PATHS.register_page,
        title: "auth-register-page",
        element: <Pages.RegisterPage />,
        children: [],
      },
      {
        path: PATHS.forgot_password_page,
        title: "auth-forgot-password-page",
        element: <Pages.ForgotPasswordPage />,
        children: [],
      },
      {
        path: PATHS.confirm_email_page,
        title: "auth-confirm-email-page",
        element: <Pages.ConfirmEmailPage />,
        children: [],
      },
      {
        path: PATHS.update_password_page,
        title: "auth-update-password-page",
        element: <Pages.UpdatePasswordPage />,
        children: [],
      },
    ],
  },

  // DASHBOARD
  {
    path: PATHS.dashboard_page,
    title: "dashboard-page",
    element: <Pages.DashboardPage />,
    children: [
      {
        path: PATHS.dashboard_pick_articles_page,
        title: "dashboard-pick-articles-page",
        element: <Pages.PickArticlesPage />,
        children: [],
      },
      {
        path: PATHS.dashboard_categories_page,
        title: "dashboard-categories-page",
        element: <Pages.ManageCategoriesPage />,
        children: [],
      },
    ],
  },

  // 404
  {
    path: PATHS.unknown_page,
    title: "unknown-page",
    element: <Pages.UnknownPage />,
    children: [],
  },
];

export default Routes;
