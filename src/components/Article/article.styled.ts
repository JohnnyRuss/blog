import styled from "styled-components";

export const Article = styled.article`
  padding: 4rem 0.75rem;

  .ql-container.ql-bubble {
    .ql-clipboard,
    .ql-tooltip {
      display: none;
    }

    .ql-editor {
      h1 {
        display: inline-block;
        padding-bottom: 0.5rem;
      }

      p > * {
        font-size: 1.6rem;
        pointer-events: none !important;
        color: ${({ theme }) => theme.colors.text} !important;
      }

      p > span {
        background: none !important;
      }

      p:has(img) {
        display: flex;
        justify-content: center;
        padding: 2rem 0;
      }

      p:has(img) img {
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
        border-radius: 1rem;
      }
    }
  }

  .article-body {
    padding: 4rem 0;
    display: flex;
    align-items: flex-start;
    gap: 3rem;
  }

  .editor-box {
    flex: 3;
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
    .article-body {
      flex-direction: column;
    }

    .article-aside {
      gap: 2rem;
      position: unset;
      width: 100%;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .article-body {
      padding: 0;
    }
  }
`;
