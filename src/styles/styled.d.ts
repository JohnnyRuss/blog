import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: ModeT;
    colors: ColorsT;
    breakpoints: BreakPointsT;
    fontSize: FontSizeT;
  }

  export type ModeT = "dark" | "light";

  interface ColorsT {
    bg: "#F2F2F2" | "#070A0D";
    text: "#F2F2F2" | "#070A0D";
    soft_black: "#24272C";
    gray: "#D9D9D9";
    gray_shade: "#8C8C8C";
    gray_dark: "#404040";
    white: "#F2F2F2";
    brown: "#B33F00";
  }

  interface FontSizeT {
    xs: "1.2rem";
    sm: "1.4rem";
    base: "1.6rem";
    md: "1.8rem";
    lg: "2rem";
    xl: "2.4rem";
    xxl: "2.8rem";
    h3: "3.8rem";
    h2: "4.8rem";
    h1: "6.8rem";
  }

  interface BreakPointsT {
    desktop: "max-width:96em"; // 1536px
    desktop_sm: "max-width:80em"; // 1280px
    tablet: "max-width:64em"; // 1024px
    tablet_sm: "max-width:53.75em"; // 860px
    mobile_lg: "max-width:40em"; // 640px
    mobile: "max-width:30em"; // 480px
  }
}
