import styled, { css } from "styled-components";

const loader = css`
  .loader {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader::after,
  .loader::before {
    content: "";
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.green_tint};
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 2s linear infinite;
  }
  .loader::after {
    animation-delay: 1s;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

export const StandSpinner = styled.div`
  position: fixed;
  z-index: 9999;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${loader};
`;

export const Spinner = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${loader};
`;

export const RelativeSpinner = styled.div`
  position: absolute;
  z-index: 9999;
  inset: 0;
  width: 100%;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${loader};
`;
