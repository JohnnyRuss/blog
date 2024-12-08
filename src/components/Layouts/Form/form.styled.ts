import styled, { css } from "styled-components";
import { scrollbar } from "@/styles/utils";

const commonStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-weight: 600;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.sm};
    letter-spacing: 0.3px;
  }

  p {
    color: ${({ theme }) => theme.colors.brown};
    font-size: ${({ theme }) => theme.fontSize.sm};
    padding-left: 0.75rem;
  }

  .text-field__input {
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    padding: 1rem 0.75rem;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.gray_dark};
  }
`;

export const TextField = styled.div`
  ${commonStyles};
`;

export const TextFieldPassword = styled.div`
  ${commonStyles};

  input.text-field__input {
    border: none;
    border-radius: none;
  }

  .password-field__wrapper {
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    padding-right: 0.75rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #fff;
  }

  .password-field__eye-btn {
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.gray_dark : theme.colors.blue_shade};
  }
`;

export const TextareaField = styled.div`
  ${commonStyles};

  .text-field__input {
    resize: none;
    ${scrollbar};
  }
`;

export const OTPField = styled.div`
  ${commonStyles};

  .otp-container {
    display: flex;
    width: 100%;
    justify-content: space-between;

    input {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem !important;
      height: 5rem;
      border-radius: 0.5rem;
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.gray_shade};
      font-size: ${({ theme }) => theme.fontSize.base};
      color: ${({ theme }) => theme.colors.gray_dark};
    }
  }
`;
