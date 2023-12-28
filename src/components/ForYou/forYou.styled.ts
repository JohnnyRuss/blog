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
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .for-you__aside {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .for-you__aside-sticky {
    position: sticky;
    top: 8.5rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    .for-you__content-box {
      flex-direction: column;
    }

    .for-you__aside {
      gap: 2rem;
      position: unset;
      width: 100%;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .for-you__content-box {
      padding: 0;
    }
  }
`;
