import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  .wrapper {
    /* background-color: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.soft_black : theme.colors.gray}; */
    max-width: 153.6rem;
    margin: 0 auto;
    padding: 0 8rem;
    min-height: 100vh;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    .wrapper {
      max-width: 136.6rem;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    .wrapper {
      max-width: 102.4rem;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    .wrapper {
      max-width: 95rem;
      padding: 0 4rem;
    }
  }

  /* @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    .wrapper {
      max-width: 64rem;
    }
  } */

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .wrapper {
      max-width: 100%;
      width: 100%;
    }
  }
`;
