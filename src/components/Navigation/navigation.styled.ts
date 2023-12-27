import styled from "styled-components";
import { motion } from "framer-motion";

export const Navigation = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.bg};

  .nav-socials__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    &--item {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.white};
      width: 3rem;
      height: 3rem;
      border-radius: 100%;

      img {
        width: 65%;
        object-fit: contain;
      }
    }
  }

  .nav-logo {
  }

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

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .nav__burger-btn {
      display: flex;
      position: relative;
      z-index: 99;
    }

    .nav-routes__block {
      pointer-events: none;
      position: fixed;
      top: 0;
      right: 0;
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      overflow: hidden;
      backdrop-filter: blur(3px);
      transition: all 0.5s ease-out;
      transform-origin: top right;
      opacity: 0;

      &-list {
        flex-direction: column;
        justify-content: flex-start;
        position: absolute;
        opacity: 0;
        height: 30vh;
        width: 50vw;
        right: 0;
        top: 0;
        padding: 5.5rem 2rem 2rem;
        align-items: stretch;
        background-color: ${({ theme }) => theme.colors.bg};
        box-shadow: -10px 0px 20px 4px rgba(0, 0, 0, 0.7);
        transform: translateY(-100%);
        transition: all 0.5s 0.2s ease-out;
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
      /* inset: 0; */
      width: 100vw;
      height: 100vh;
      border-radius: 0;
      opacity: 1;

      &-list {
        height: 100vh;
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`;
