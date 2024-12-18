import styled from "styled-components";

export const ForYou = styled.section`
  padding: 4rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .for-you__content-box {
    display: flex;
    gap: 3rem;
  }

  .for-you__articles-list {
    flex: 3;
  }

  .infinite-scroll-component {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .for-you__aside {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    height: 100%;
    position: sticky;
    top: 8.5rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    .for-you__content-box {
      flex-direction: column;
    }

    .for-you__aside {
      gap: 2rem;
      position: unset;
      width: 100%;
      display: none;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    padding-top: 1rem;

    .for-you__content-box {
      padding: 0;
    }

    .infinite-scroll-component {
      gap: 3rem;
    }
  }
`;
