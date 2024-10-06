import styled from "styled-components";

export const ArticleHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .article-head__sub {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;
    gap: 2rem;
  }

  .article-head__sub-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .article-head__author-actions {
    display: flex;
    align-items: center;
    gap: 3rem;
    font-size: ${({ theme }) => theme.fontSize.xl};

    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button:last-child {
      color: ${({ theme }) => theme.colors.red};
    }
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
    padding: 0 1.5rem;

    a:hover {
      text-decoration: underline;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .article-head__sub {
      padding: 0;
    }

    .article-head__sub-box.actions-box {
      flex-direction: column;
      gap: 1.5rem;

      [data-category-chip] {
        order: 2;
        width: 100%;

        span {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
`;
