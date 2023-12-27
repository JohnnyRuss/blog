import { useContext } from "react";

import { ThemeContext } from "./ThemeProvider";

const useThemeContext = () => useContext(ThemeContext);

export { useThemeContext };
