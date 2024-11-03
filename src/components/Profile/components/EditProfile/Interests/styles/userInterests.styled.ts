import styled, { css } from "styled-components";

const headerStyles = css`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  margin: 5rem 0rem;

  button {
    display: flex;
    align-items: center;
    gap: 1.75rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    transition: all 0.2s ease;

    span {
      font-size: ${({ theme }) => theme.fontSize.xl};
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.blue_tint};
    }
  }
`;

export const UserInterests = styled.div`
  margin-top: 5rem;

  .user-interests__header {
    ${headerStyles}
  }

  .expand-btn {
    display: block;
    margin: 3rem 0rem;
    width: 100%;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.boxShadow.radial_md};
    background-color: ${({ theme }) =>
      theme.mode === "light" ? theme.colors.black : theme.colors.white};
    color: ${({ theme }) =>
      theme.mode === "light" ? theme.colors.white : theme.colors.gray_dark};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;
