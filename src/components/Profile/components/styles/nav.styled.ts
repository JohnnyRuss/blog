import styled, { keyframes } from "styled-components";
import { themeTransition } from "@/styles/utils";

const borderTransition = keyframes`
  0%{
    width:0%;
  } 

  100%{
    width:100%;
  }
`;

export const ProfileNav = styled.nav`
  position: sticky;
  top: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  padding-bottom: 1.5rem;
  ${themeTransition};

  .profile-nav--list {
    display: flex;
    align-items: center;
    gap: 3rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_shade};
    box-sizing: content-box;
    height: 5rem;

    &__item {
      height: 100%;
      box-sizing: content-box;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        background: ${({ theme }) =>
          theme.mode === "dark" ? theme.colors.brown : theme.colors.gray_dark};
        height: 3px;
        left: 0;
        right: 0;
        width: 0%;
        transform: translateY(-50%);
        transition: width 1s ease;
      }

      &.active {
        font-weight: 600;

        &::after {
          animation: ${borderTransition} 1s ease forwards;
        }
      }
    }

    &__item-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 2rem;
      height: 100%;
    }
  }
`;
