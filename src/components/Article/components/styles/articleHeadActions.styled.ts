import styled from "styled-components";

export const ArticleHeadActions = styled.div`
  margin-left: auto;
  display: flex;
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

    &.bookmark svg,
    &.heart svg {
      fill: #555;
    }

    &.heart.active svg {
      fill: red;
    }
  }
`;
