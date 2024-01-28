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

      pre {
        color: #fff;
        background-color: #1b2024;
        border: 1px solid ${({ theme }) => theme.colors.gray_shade};
        padding: 2rem;
        border-radius: 0.5rem;
        margin: 2rem 0;
      }

      p:has(img) {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        margin: 3rem auto;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          box-shadow: ${({ theme }) => theme.boxShadow.radial_lg};
          object-fit: contain;
          max-width: 100%;
          max-height: 50rem;
          border-radius: inherit;
          display: inline-block;
          margin: 0 auto;
        }
      }

      iframe {
        border-radius: 0.5rem;
        margin: 3rem auto;
        width: 90%;
        aspect-ratio: 16/9;
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
      }
    }
  }

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
