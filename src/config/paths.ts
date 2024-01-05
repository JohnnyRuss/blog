const PATHS = {
  root_page: "/",
  home_page: "/home",
  blog_page: "/blog",
  article_page: "/blog/:blogId",
  for_you_page: "/for-you",
  write: "/write",
  // PROFILE
  profile_page: "/profile",
  profile_review: "/profile/review",
  profile_lists: "/profile/lists",
  profile_saved_lists: "/profile/saved",
  profile_history: "/profile/history",
  profile_following: "/profile/following",
  profile_settings: "/profile/settings",
  // AUTH
  auth_page: "/auth",
  login_page: "/auth/login",
  register_page: "/auth/register",
  forgot_password_page: "/auth/forgot_password",
  confirm_email_page: "/auth/confirm_email",
  update_password_page: "/auth/update_password",
  unknown_page: "*",
};

const PRIVATE_ROUTES = ["/for-you", "/write", "/profile"];

export { PATHS, PRIVATE_ROUTES };
