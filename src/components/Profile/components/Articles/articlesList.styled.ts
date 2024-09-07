import styled from "styled-components";

export const ArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .article-card--sm__layover {
    position: relative;

    &-actions--box {
      position: absolute;
      top: 0;
      right: 0;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    &-delete--btn,
    &-edit--btn {
      width: 4rem;
      height: 4rem;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 100%;
      box-shadow: ${({ theme }) => theme.boxShadow.radial_lg};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${({ theme }) => theme.fontSize.lg};
      opacity: 0;
      pointer-events: none !important;
      transform: scale(0.5);
      transition: all 0.34s ease;
    }

    &-delete--btn {
      color: ${({ theme }) => theme.colors.red};
    }

    &-edit--btn {
      color: ${({ theme }) => theme.colors.gray_shade};
    }

    &:hover .article-card--sm__layover-delete--btn,
    &:hover .article-card--sm__layover-edit--btn {
      transform: scale(1);
      opacity: 1;
      pointer-events: all !important;
    }
  }
`;
