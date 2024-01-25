import { useContext } from "react";

import { AppContext } from "./AppProvider";
import { ThemeContext } from "./ThemeProvider";
import { ProfileContext } from "./ProfileProvider";

const useThemeContext = () => useContext(ThemeContext);
const useAppContext = () => useContext(AppContext);
const useProfileContext = () => useContext(ProfileContext);

export { useThemeContext, useAppContext, useProfileContext };
