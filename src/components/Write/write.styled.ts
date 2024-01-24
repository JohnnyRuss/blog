import styled from "styled-components";
import { scrollbar } from "@/styles/utils";

export const write = styled.div`
  padding: 2rem 0.75rem 0rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .title-input {
    width: 100%;
    resize: none;
    border: none;
    background: transparent;
    font-size: ${({ theme }) => theme.fontSize.h3};
    outline: none;
    font-weight: 700;

    &::placeholder {
      font-weight: 400;
      font-style: italic;
    }
  }

  .quill {
    border-radius: 1rem;
  }

  .quill .ql-toolbar.ql-snow,
  .quill .ql-container.ql-snow {
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 0.5rem;

    &:focus,
    &:focus-within {
      border-color: #4285f4;
    }
  }

  .quill .ql-container.ql-snow {
    margin-top: 2rem;
    padding: 1rem;

    .ql-editor {
      min-height: 45vh;
      max-height: 80vh;
      overflow-y: auto;
      ${scrollbar};

      p,
      p > * {
        font-size: ${({ theme }) => theme.fontSize.md};
      }

      pre {
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

  .publish-btn {
    width: 100%;
    background: ${({ theme }) => theme.colors.green};
    padding: 1.5rem 0;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;
