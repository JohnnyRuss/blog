import styled from "styled-components";
import { scaleDown, scaleUp } from "@/styles/animations";

export const CheckBox = styled.label`
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.colors.white};

  .checkbox--icon {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    animation: ${scaleDown()} 0.3s ease forwards;
  }

  &.checked .checkbox--icon {
    animation: ${scaleUp()} 0.3s ease forwards;
  }
`;
