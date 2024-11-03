import styled, { css } from "styled-components";
import { scrollbar } from "@/styles/utils";

const headerStyles = css`
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  margin: 5rem 0rem;

  button {
    display: flex;
    align-items: center;
    gap: 1.75rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    transition: all 0.2s ease;

    span {
      font-size: ${({ theme }) => theme.fontSize.xl};
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.blue_tint};
    }
  }
`;

export const FitInterestsModal = styled.div`
  .user-editable--interests__header {
    ${headerStyles}
    margin: 0rem 0rem 3.5rem 0rem;
    padding: 0rem 2.5rem;
  }

  .user-editable--interests__search-container {
    position: relative;
    margin: 0rem 0rem 3.5rem 0rem;
    background-color: ${({ theme }) => theme.colors.bg};

    input {
      width: 100%;
      height: 4.5rem;
      border-radius: 1rem;
      padding: 0rem 1rem;
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.gray_shade};
      color: ${({ theme }) => theme.colors.gray_dark};
    }

    &__dropdown {
      position: absolute;
      z-index: 9;
      left: 0;
      right: 0;
      top: 5.5rem;
      background-color: ${({ theme }) => theme.colors.bg};
      box-shadow: ${({ theme }) => theme.boxShadow.radial_md};
      border-radius: 1rem;
      padding: 1.5rem 1.5rem;

      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -1rem;
        left: -1rem;
        right: -1rem;
        bottom: -100%;
      }

      ul {
        min-height: 6rem;
        max-height: 25rem;
        overflow-y: auto;
        ${scrollbar};
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-right: 1rem;

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0rem 1.5rem;
          border-radius: 1rem;
          color: ${({ theme }) => theme.colors.white};
          font-size: ${({ theme }) => theme.fontSize.sm};
          cursor: pointer;
          min-height: 6rem;
          position: relative;
        }

        li figure,
        li span {
          position: relative;
          z-index: 9;
        }

        li:after {
          content: "";
          position: absolute;
          z-index: 1;
          inset: 0;
          width: 0%;
          border-radius: inherit;
          background: linear-gradient(
            to right,
            ${({ theme }) => theme.colors.blue_shade},
            ${({ theme }) => theme.colors.blue_tint}
          );
          transition: all 0.3s ease;
        }

        li:not(.selected):hover::after {
          width: 100%;
        }

        li[aria-disabled="true"] {
          pointer-events: none;
        }

        li.selected {
          background: linear-gradient(
            to right,
            ${({ theme }) => theme.colors.soft_black},
            ${({ theme }) => theme.colors.gray_shade}
          ) !important;
        }

        li figure {
          border-radius: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4rem;
          height: 4rem;
        }

        li figure img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .user-editable--interests__content-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    &__recent {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    [data-section-title] {
      margin-left: 2.5rem;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .user-editable--interests__header {
      flex-direction: column;
      margin: unset;
    }
  }
`;
