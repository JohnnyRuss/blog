import styled from "styled-components";

export const List = styled.div`
  padding: 1rem;

  .list-header {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .list-header__author {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .list-header__sub-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .list-header__details {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    &-title {
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: 600;
    }

    &-date {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }

  .list-header__actions-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.75rem;
  }

  .list-header__actions {
    display: flex;
    align-items: center;
    gap: 1rem;

    &-btn {
      padding: 0.75rem 3rem;
      border: 1px solid ${({ theme }) => theme.colors.gray_dark};
      border-radius: 0.5rem;
    }
  }
`;
