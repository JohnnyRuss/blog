import { useContext } from "react";

import { AppContext } from "./AppProvider";
import { ThemeContext } from "./ThemeProvider";
import { AppUIContext } from "./AppUIProvider";
import { CommentsContext } from "./CommentsProvider";

const useAppContext = () => useContext(AppContext);
const useAppUIContext = () => useContext(AppUIContext);
const useThemeContext = () => useContext(ThemeContext);
const useCommentsContext = () => useContext(CommentsContext);

export { useThemeContext, useAppContext, useAppUIContext, useCommentsContext };
