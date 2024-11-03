import styled from "styled-components";

export const EditableField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .details-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;

    &__content {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      width: 100%;

      &-label {
        color: ${({ theme }) => theme.colors.gray_shade};
        font-size: ${({ theme }) => theme.fontSize.sm};
      }

      &-detail {
        font-size: ${({ theme }) => theme.fontSize.base};
        font-weight: 500;

        &.fullname {
          text-transform: capitalize;
        }
      }
    }
  }

  .details-block__counter {
    align-self: flex-end;
    /* padding: 1rem 1rem 1rem 0; */
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.gray_shade};
  }

  .details-block__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .details-block__content-edit {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    width: 30rem;
    width: 100%;

    .editable-field__actions-box {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .editable-field__actions-box--btn {
      font-size: ${({ theme }) => theme.fontSize.sm};
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      letter-spacing: 1px;

      &:disabled {
        opacity: 0.5;
      }

      &.cancel-btn {
        color: ${({ theme }) => theme.colors.gray_dark};
        background-color: ${({ theme }) => theme.colors.gray};
        border: 1px solid ${({ theme }) => theme.colors.gray};
      }

      &.save-btn {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.green};
        border: 1px solid ${({ theme }) => theme.colors.green_shade};
      }
    }
  }
`;
