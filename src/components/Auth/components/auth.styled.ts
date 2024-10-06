import styled from "styled-components";

export const Auth = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  gap: 8rem;

  &.popup {
    height: max-content;
    padding: 4rem;
    gap: 4rem;
    width: 38rem;
    border-radius: 2rem;
    border: 1px solid white;

    .submit-btn {
      margin-top: 2rem;
    }

    @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
      border-radius: 0rem;
      border: none;
      padding: 0rem;
      max-width: 100%;
      height: 91vh;
    }
  }

  .auth-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 40rem;
    width: 100%;

    .submit-btn {
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      padding: 1rem 0;
      border-radius: 0.5rem;
    }

    .forgot-password {
      font-weight: 600;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.blue};
      font-size: ${({ theme }) => theme.fontSize.sm};
      text-align: center;
    }

    .have-an--account {
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.sm};

      button,
      strong a {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.blue};
        font-weight: 600;
      }
    }
  }
`;
