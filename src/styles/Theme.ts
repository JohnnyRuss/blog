import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  mode: "light",

  breakpoints: {
    desktop: "max-width:96em",
    desktop_sm: "max-width:80em",
    tablet: "max-width:64em",
    tablet_sm: "max-width:48em",
    mobile_lg: "max-width:40em",
    mobile: "max-width:30em",
  },

  colors: {
    bg: "#F2F2F2",
    text: "#070A0D",
    soft_black: "#24272C",
    gray: "#D9D9D9",
    gray_shade: "#8C8C8C",
    gray_dark: "#404040",
    white: "#F2F2F2",
    brown: "#B33F00",
  },

  fontSize: {
    xs: "1.2rem",
    sm: "1.4rem",
    base: "1.6rem",
    md: "1.8rem",
    lg: "2rem",
    xl: "2.4rem",
    xxl: "2.8rem",
    h3: "3.8rem",
    h2: "4.8rem",
    h1: "6.8rem",
  },
};

const ThemeLight: DefaultTheme = {
  ...Theme,
  mode: "light",
  colors: {
    ...Theme.colors,
    text: "#070A0D",
    bg: "#F2F2F2",
  },
};

const ThemeDark: DefaultTheme = {
  ...Theme,
  mode: "dark",
  colors: {
    ...Theme.colors,
    text: "#F2F2F2",
    bg: "#070A0D",
  },
};

export { ThemeLight, ThemeDark };
