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
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.bg};
  padding-bottom: 1.5rem;
  ${themeTransition};

  .profile-nav--list {
    /* border-bottom: 1px solid ${({ theme }) => theme.colors.gray_shade}; */

    ul {
      display: flex;
      align-items: center;
      gap: 3rem;
      height: 5rem;
      width: 100%;
      box-sizing: content-box;

      .react-multi-carousel-item {
        width: max-content !important;
        position: unset !important;
        flex: 0 !important;
        height: 100%;
      }

      .profile-nav--list__item {
        height: 100%;
        width: max-content;
        box-sizing: content-box;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;
        height: 100%;

        &::after {
          content: "";
          position: absolute;
          background: ${({ theme }) =>
            theme.mode === "dark"
              ? theme.colors.brown
              : theme.colors.gray_dark};
          height: 3px;
          left: 0;
          right: 0;
          bottom: 0;
          width: 0%;
          transform: translateY(60%);
          transition: width 1s ease;
          box-sizing: content-box;
        }

        &.active {
          font-weight: 600;

          &::after {
            animation: ${borderTransition} 1s ease forwards;
          }
        }
      }

      @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
        gap: 1rem;
      }

      @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
        font-size: ${({ theme }) => theme.fontSize.sm};
        gap: 0;
      }
    }
  }
`;
