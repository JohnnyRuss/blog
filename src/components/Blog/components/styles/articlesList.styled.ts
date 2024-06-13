import styled from "styled-components";

export const ArticlesList = styled.div`
  flex: 3;

  .loading-skeleton,
  .infinite-scroll-component {
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(2, 1fr);

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .loading-skeleton,
    .infinite-scroll-component {
      gap: 3rem;
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    .loading-skeleton,
    .infinite-scroll-component {
      gap: 5rem;
    }
  }
`;
