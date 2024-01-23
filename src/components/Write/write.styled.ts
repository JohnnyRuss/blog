import styled from "styled-components";

export const write = styled.div`
  padding: 4rem 0.75rem;

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
    margin-top: 3rem;

    .ql-editor {
      min-height: 45vh;
    }
  }

  .publish-btn {
    width: 100%;
    margin-top: 3rem;
    background: ${({ theme }) => theme.colors.green};
    padding: 1.5rem 0;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;
