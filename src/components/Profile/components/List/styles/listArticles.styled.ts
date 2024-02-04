import styled from "styled-components";

export const ListArticles = styled.div`
  margin-top: 4rem;

  .infinite-scroll-component {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
