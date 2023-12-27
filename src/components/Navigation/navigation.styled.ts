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
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

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
`;
