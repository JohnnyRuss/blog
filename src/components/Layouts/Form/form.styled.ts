import styled from "styled-components";

export const TextField = styled.div`
  width: 100%;

  .text-field__input {
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    padding: 1rem 0.75rem;
    width: 100%;
  }
`;
