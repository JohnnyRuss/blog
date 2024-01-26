const PATHS = {
  root_page: "/",
  home_page: "/home",
  blog_page: "/blog",
  article_page: "/:slug",
  for_you_page: "/for-you",
  write: "/write",
  // PROFILE
  profile_page: "/profile/:username",
  profile_review: "/profile/:username/review",
  profile_lists: "/profile/:username/lists",
  profile_saved_lists: "/profile/:username/saved",
  profile_history: "/profile/:username/history",
  profile_following: "/profile/:username/following",
  profile_settings: "/profile/:username/settings",
  // AUTH
  auth_page: "/auth",
  login_page: "/auth/login",
  register_page: "/auth/register",
  forgot_password_page: "/auth/forgot_password",
  confirm_email_page: "/auth/confirm_email",
  update_password_page: "/auth/update_password",
  unknown_page: "*",
};

const DYNAMIC_ROUTES = {
  article_page: (slug: string) => PATHS.article_page.replace(":slug", slug),
  profile_page: (username: string) =>
    PATHS.profile_page.replace(":username", username),
  profile_review: (username: string) =>
    PATHS.profile_review.replace(":username", username),
  profile_lists: (username: string) =>
    PATHS.profile_lists.replace(":username", username),
  profile_saved_lists: (username: string) =>
    PATHS.profile_saved_lists.replace(":username", username),
  profile_history: (username: string) =>
    PATHS.profile_history.replace(":username", username),
  profile_following: (username: string) =>
    PATHS.profile_following.replace(":username", username),
  profile_settings: (username: string) =>
    PATHS.profile_settings.replace(":username", username),
};

const PRIVATE_ROUTES = ["/for-you", "/write", "/profile"];

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
