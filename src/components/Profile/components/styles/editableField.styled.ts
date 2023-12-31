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

      &-label {
        color: ${({ theme }) => theme.colors.gray_shade};
        font-size: ${({ theme }) => theme.fontSize.sm};
      }

      &-detail {
        font-size: ${({ theme }) => theme.fontSize.base};
        font-weight: 600;
      }
    }

    &__edit-btn {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.gray_shade};
      align-self: flex-start;
      margin-top: 3rem;
    }
  }

  .details-block__counter {
    align-self: flex-end;
    padding-right: 4rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.gray_shade};
  }

  .details-block__content-edit {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    width: 30rem;

    button {
      font-size: ${({ theme }) => theme.fontSize.sm};
      border: 1px solid ${({ theme }) => theme.colors.gray_shade};
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.gray};
      color: ${({ theme }) => theme.colors.gray_dark};
    }
  }
`;
