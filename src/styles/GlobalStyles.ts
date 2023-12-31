import { createGlobalStyle } from "styled-components";
import { themeTransition } from "./utils";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;
    max-width: 100vw;
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    ${themeTransition};
  }

  a {
    text-decoration: none;
    font-weight: inherit;
  }
  
  li,
  ul{
    list-style:none;
  }

  button{
    border:none;
    background: none;
    outline:none;
    cursor:pointer;
  }

  a,
  button{
    color: inherit;
    font-size: inherit;
  }

  body::-webkit-scrollbar {
    width: 0.8rem;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.mode === "light" ? theme.colors.gray_dark : theme.colors.brown};
    border-radius: 2rem;
  }

  body::-webkit-scrollbar-track {
    border-radius: 2rem;
    background-color: ${({ theme }) =>
      theme.mode === "light" ? theme.colors.gray : theme.colors.gray_dark};
  }

  body:has(.scroll-block){
    overflow: hidden;
  }
`;

export { GlobalStyles };
