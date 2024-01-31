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
    }

    &.heart.active svg {
      fill: red;
    }
  }
`;
