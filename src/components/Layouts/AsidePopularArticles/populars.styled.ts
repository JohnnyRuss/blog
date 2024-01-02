import styled from "styled-components";

export const PopularArticles = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .popular-item {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .popular-item__footer {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: ${({ theme }) => theme.fontSize.xs};

    &-author {
      font-weight: 600;
    }

    &-date {
      color: ${({ theme }) => theme.colors.gray_shade};
    }
  }
`;
