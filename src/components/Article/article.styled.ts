import styled from "styled-components";
import { quillReadOnly } from "@/styles/utils";

export const Article = styled.article`
  padding: 4rem 0.75rem;

  ${quillReadOnly};

  .flex-container {
    padding: 4rem 0;
    display: flex;
    align-items: flex-start;
    gap: 3rem;
  }

  .article-body {
    flex: 3;
    max-width: 70%;
  }

  .article-aside {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    position: sticky;
    top: 8.5rem;
  }

  .article-footer--actions {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .article-actions--bar {
      border-top: 1px solid ${({ theme }) => theme.colors.gray_shade};
      padding: 1.25rem 0.75rem 0rem;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    .flex-container {
      flex-direction: column;
    }

    .article-body {
      flex: 1;
      max-width: 100%;
      width: 100%;
    }

    .article-aside {
      gap: 2rem;
      position: unset;
      width: 100%;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .flex-container {
      padding: 0;
    }
  }
`;
