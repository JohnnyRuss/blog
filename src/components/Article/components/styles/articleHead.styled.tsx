import styled from "styled-components";

export const ArticleHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .article-head__sub {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 0 1.5rem;
  }

  &__title {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }
`;
