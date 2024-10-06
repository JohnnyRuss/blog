import styled from "styled-components";

export const ArticleHeadActions = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  .actions-item {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      line-height: 1;
    }

    svg {
      font-size: 28px;
      line-height: 1;
    }

    &.views {
      margin-left: auto;
    }

    &.bookmark svg,
    &.heart svg {
      fill: #555;
      font-size: ${({ theme }) => theme.fontSize.lg};
    }

    &.bookmark.active svg {
      fill: ${({ theme }) => theme.colors.red};
    }

    &.heart.active svg {
      fill: red;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    order: 1;
    display: grid;
    grid-template-columns: 4;
    grid-template-rows: 2;
    width: 100%;
    justify-content: stretch;
    justify-items: flex-end;

    button.follow-card__btn {
      grid-row: 1;
      grid-column: 1/5;
      width: 100%;
    }

    .actions-item.views {
      grid-row: 2;
      grid-column: 1;
    }

    .actions-item.heart {
      grid-row: 2;
      grid-column: 2;
    }

    .actions-item.comment {
      grid-row: 2;
      grid-column: 3;
    }

    .actions-item.bookmark {
      grid-row: 2;
      grid-column: 4;
    }
  }
`;
