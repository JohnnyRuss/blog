import styled, { css } from "styled-components";
import { scrollbar } from "@/styles/utils";

const commonStyles = css`
  width: 100%;

  .text-field__input {
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    padding: 1rem 0.75rem;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const TextField = styled.div`
  ${commonStyles};
`;

export const TextareaField = styled.div`
  ${commonStyles};

  .text-field__input {
    resize: none;
    ${scrollbar};
  }
`;
