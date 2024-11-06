import styled from "styled-components";
import { DialogT } from "@/interface/ui/commons.types";

export const Dialog = styled.div<{ $type: DialogT["type"] }>`
  width: 55rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .dialog-title {
    color: ${({ theme, $type }) =>
      $type === "detailed" ? theme.colors.gray_dark : theme.colors.red};
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  .dialog-subtitle {
    font-size: ${({ theme }) => theme.fontSize.sm};
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.gray_shade};
  }

  .dialog-message {
    text-align: start;
    color: ${({ theme }) => theme.colors.gray_dark};
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  .dialog-actions {
    align-self: flex-end;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    .dialog__action-btn {
      padding: 1rem 2rem;
      border-radius: 0.5rem;

      &:first-child {
        background-color: ${({ theme }) => theme.colors.gray};
        color: ${({ theme }) => theme.colors.gray_dark};
      }

      &:last-child {
        background-color: ${({ theme, $type }) =>
          $type === "detailed" ? theme.colors.blue : theme.colors.red};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    width: 100%;
    padding: 2rem 1rem;

    .dialog-title {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }

    .dialog-message {
      font-size: ${({ theme }) => theme.fontSize.base};
    }

    .dialog__actions .dialog__action-btn {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }
`;
