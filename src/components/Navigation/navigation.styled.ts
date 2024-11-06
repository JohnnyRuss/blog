import styled from "styled-components";
import { motion } from "framer-motion";
import { themeTransition } from "@/styles/utils";

export const Navigation = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.bg};
  ${themeTransition};

  .theme-btn {
    width: 60px;
    height: 26px;
    padding: 3px;
    margin-left: auto;
    margin-right: 3rem;
    display: flex;
    cursor: pointer;
    position: relative;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: inset 1px 1px 4px 3px rgba(0, 0, 0, 0.4);

    &__fig {
      height: 20px;
      width: 20px;
      position: absolute;
      bottom: 3px;
      top: 3px;
      transition: all 0.5s ease;

      img {
        width: 100%;
        object-fit: contain;
      }
    }

    &__toggle-circle {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      position: relative;
      display: inline-block;
      background-color: ${({ theme }) =>
        theme.mode === "dark" ? theme.colors.brown : theme.colors.gray_dark};
      transition: all 0.5s ease;
    }

    &.light {
      .theme-btn__fig {
        left: calc(100% - 24px);
      }

      .theme-btn__toggle-circle {
        left: 3px;
      }
    }

    &.dark {
      .theme-btn__fig {
        left: 4px;
      }

      .theme-btn__toggle-circle {
        left: calc(100% - 23px);
      }
    }
  }

  [data-write-btn] {
    margin-right: 3rem;
  }

  .nav-routes__block {
    &-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    &-list--item {
      padding: 0.8rem 1.5rem;
    }

    .active > .nav-routes__block-list--item {
      border-bottom: 2px solid
        ${({ theme }) =>
          theme.mode === "dark" ? theme.colors.brown : theme.colors.gray_dark};
    }
  }

  .nav__burger-btn {
    display: none;
    justify-content: center;
    align-items: center;
    line-height: 1;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  .logout-btn__dropdown-wall {
    inset: 0;
    z-index: 2;

    &.active {
      position: fixed;
    }
  }

  .profile-dropdown__box {
    position: relative;
    margin-left: 3rem;

    figure {
      width: 4rem;
      height: 4rem;
      border-radius: 100%;
      overflow: hidden;
      position: relative;
      z-index: 9;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.boxShadow.radial_sm};
      border: 1px solid ${({ theme }) => theme.colors.gray};

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: inherit;
      }
    }

    .profile-dropdown__window {
      position: absolute;
      z-index: 9;
      border: 1px solid ${({ theme }) => theme.colors.gray};
      min-width: 20rem;
      right: -2rem;
      top: calc(100% + 1rem);
      padding: 0.5rem;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.bg};
      box-shadow: ${({ theme }) => theme.boxShadow.space_sm};

      &-btn {
        width: 100%;
        text-align: center;
        padding: 0.5rem;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 1rem;

        span:first-child {
          display: flex;
          align-items: center;
          line-height: 1;
          font-size: ${({ theme }) => theme.fontSize.lg};
        }

        &:hover {
          color: ${({ theme }) =>
            theme.mode === "dark"
              ? theme.colors.blue_tint
              : theme.colors.blue_shade};
        }

        &.danger:hover {
          color: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    justify-content: flex-end;
    gap: 2.5rem;

    .nav-logo {
      margin-right: auto;
    }

    .theme-btn {
      margin-right: auto;
      margin-left: unset;
    }

    .profile-dropdown__box {
      margin-left: 0rem;
    }

    .nav__burger-btn {
      display: flex;
      position: relative;
      z-index: 99;
    }

    .nav-routes__block {
      pointer-events: none;
      position: fixed;
      z-index: 99;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      opacity: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      backdrop-filter: blur(3px);
      transform-origin: top right;

      &-list {
        flex-direction: column;
        justify-content: flex-start;
        position: absolute;
        z-index: 99;
        opacity: 0;
        height: 100vh;
        width: 50vw;
        right: 0;
        top: 0;
        padding: 5.5rem 2rem 2rem;
        align-items: stretch;
        background-color: ${({ theme }) => theme.colors.bg};
        box-shadow: -10px 0px 20px 4px rgba(0, 0, 0, 0.7);
        transition: all 0.3s ease;
      }

      &-list--item {
        width: 100%;
        text-align: center;
        border-bottom: 1px solid transparent;
        transition: all 0.5s ease;

        @media (hover: hover) {
          &:hover {
            border-color: ${({ theme }) => theme.colors.gray_shade};
          }
        }
      }
    }

    &.open .nav-routes__block {
      opacity: 1;
      pointer-events: all;

      &-list {
        opacity: 1;
      }
    }

    &.open .nav__burger-btn {
      position: absolute;
      right: 0rem;
    }
  }
`;
