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

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    .flex-container {
      flex-direction: column;
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
