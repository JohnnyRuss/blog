import styled from "styled-components";

export const CreateList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray_dark};

  .create-list__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .create-list__footer {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    color: ${({ theme }) => theme.colors.green};
  }

  .privacy-checkbox {
    display: flex;
    align-items: center;
    color: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.white : theme.colors.gray_dark};
  }
`;
