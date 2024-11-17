import styled from "styled-components";

export const CommentsForm = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  max-width: 100%;
  padding: 0 2rem;

  [data-textarea] {
    max-width: 100%;
  }

  button {
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.h3};
    color: ${({ theme }) => theme.colors.green};
  }
`;
