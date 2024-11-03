import styled from "styled-components";

export const DeleteAccount = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .delete-btns--box {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  .delete-btn {
    width: 100%;
    padding: 1.7rem;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.md};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.boxShadow.radial_lg};
  }

  .delete-btn.cancel {
    background-color: ${({ theme }) => theme.colors.green};
    /* color: ${({ theme }) => theme.colors.gray_dark}; */
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    .delete-btn {
      padding: 1.25rem;
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .delete-btns--box {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
