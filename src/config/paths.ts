const PATHS = {
  root_page: "/",
  home_page: "/home",
  blog_page: "/blog",
  article_page: "/:slug",
  for_you_page: "/for-you",
  write: "/write",
  // PROFILE
  profile_root: "/profile",
  profile_page: "/profile/:username",
  profile_review: "/profile/:username/review",
  profile_articles: "/profile/:username/articles",
  profile_lists: "/profile/:username/lists",
  profile_list: "/profile/:username/lists/:listId",
  profile_saved_lists: "/profile/:username/saved",
  profile_history: "/profile/:username/history",
  profile_following: "/profile/:username/following",
  profile_following_suggestions: "/profile/:username/suggestions/following",
  profile_settings: "/profile/:username/settings",
  // AUTH
  auth_page: "/auth",
  login_page: "/auth/login",
  register_page: "/auth/register",
  forgot_password_page: "/auth/forgot_password",
  confirm_email_page: "/auth/confirm_email",
  update_password_page: "/auth/update_password",
  // DASHBOARD
  dashboard_page: "/dashboard",
  dashboard_pick_articles_page: "/dashboard/pick-articles",
  dashboard_categories_page: "/dashboard/categories",
  // UNKNOWN
  unknown_page: "*",
};

const DYNAMIC_ROUTES = {
  article_page: (slug: string) => PATHS.article_page.replace(":slug", slug),
  profile_page: (username: string) =>
    PATHS.profile_page.replace(":username", username),
  profile_review: (username: string) =>
    PATHS.profile_review.replace(":username", username),
  profile_articles: (username: string) =>
    PATHS.profile_articles.replace(":username", username),
  profile_lists: (username: string) =>
    PATHS.profile_lists.replace(":username", username),
  profile_list: (username: string, listId: string) =>
    PATHS.profile_list
      .replace(":username", username)
      .replace(":listId", listId),
  profile_saved_lists: (username: string) =>
    PATHS.profile_saved_lists.replace(":username", username),
  profile_history: (username: string) =>
    PATHS.profile_history.replace(":username", username),
  profile_following: (username: string) =>
    PATHS.profile_following.replace(":username", username),
  profile_following_suggestions: (username: string) =>
    PATHS.profile_following_suggestions.replace(":username", username),
  profile_settings: (username: string) =>
    PATHS.profile_settings.replace(":username", username),
};

const PRIVATE_ROUTES = [PATHS.for_you_page, PATHS.write, PATHS.profile_root];

const getNativeLocation = (currentLocation: string) => {
  let originalPath = "";

  for (const key in PATHS) {
    const pattern = PATHS[key];
    const regex = new RegExp("^" + pattern.replace(/:[^/]+/g, "([^/]+)") + "$");

    if (regex.test(currentLocation)) {
      originalPath = PATHS[key];

      break;
    }
  }

  return originalPath;
};

export { PATHS, DYNAMIC_ROUTES, PRIVATE_ROUTES, getNativeLocation };
