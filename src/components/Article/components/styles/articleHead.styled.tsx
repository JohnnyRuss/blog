import styled from "styled-components";

export const ArticleHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .article-head__sub {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 0 1.5rem;
  }

  [data-category-chip] {
    justify-self: flex-end;
  }

  .article-head__title {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }

  .article-head__categories-list {
    font-size: ${({ theme }) => theme.fontSize.sm};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.colors.blue_tint};
    gap: 0.3rem;
  }
`;
