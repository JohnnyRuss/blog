import { useContext } from "react";

import { AppContext } from "./AppProvider";
import { ThemeContext } from "./ThemeProvider";

const useThemeContext = () => useContext(ThemeContext);
const useAppContext = () => useContext(AppContext);

export { useThemeContext, useAppContext };
