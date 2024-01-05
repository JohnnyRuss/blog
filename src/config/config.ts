import { RouterHistoryT } from "@/interface/config.types";

const BLOG_THEME_KEY = "BLOG_THEME";
const BLOG_PASSPORT_KEY = "BLOG_PASSPORT";

const RouterHistory: RouterHistoryT = {
  navigate: () => {},
  location: {
    hash: "",
    key: "",
    pathname: "",
    search: "",
    state: null,
  },
};

export { BLOG_THEME_KEY, BLOG_PASSPORT_KEY, RouterHistory };
