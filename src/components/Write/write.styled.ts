import styled from "styled-components";
import { quillEdit } from "@/styles/utils";

export const Write = styled.div`
  padding: 2rem 0.75rem 2rem 0.75rem;
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
    color: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.white : theme.colors.black};

    &::placeholder {
      font-weight: 400;
      font-style: italic;
    }
  }

  ${quillEdit};

  .publish-btn {
    width: 100%;
    background: ${({ theme }) => theme.colors.green};
    padding: 1.5rem 0;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;
