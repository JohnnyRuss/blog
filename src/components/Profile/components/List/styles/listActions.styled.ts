import styled from "styled-components";

export const ListActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  .list-header__actions-btn {
    border: 1px solid ${({ theme }) => theme.colors.gray_dark};
    border-radius: 100%;
    width: 3.5rem;
    height: 3.5rem;
    padding: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &.delete {
      color: ${({ theme }) => theme.colors.red};
      border-color: ${({ theme }) => theme.colors.red};
    }

    &.remove {
      color: ${({ theme }) => theme.colors.brown};
      border-color: ${({ theme }) => theme.colors.brown};
    }

    &.save {
      color: ${({ theme }) => theme.colors.green};
      border-color: ${({ theme }) => theme.colors.green};
    }

    &.edit {
      color: ${({ theme }) => theme.colors.blue};
      border-color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
