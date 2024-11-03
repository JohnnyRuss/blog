import styled from "styled-components";
import { scrollbar } from "@/styles/utils";

export const FitInterestsGlobalPopup = styled.div`
  height: 80vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 3.5rem 2rem;
  margin-bottom: 1rem;

  .fit-interests__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: all !important;

      svg {
        font-size: ${({ theme }) => theme.fontSize.xxl};
      }
    }
  }

  .fit-interests__sub-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 3rem;

    .fit-interests__search-box {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.gray};
      height: 5.5rem;
      padding: 0rem 1rem;
      border-radius: 1rem;
      width: 50rem;
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        font-size: ${({ theme }) => theme.fontSize.xxl};
      }

      input {
        height: 100%;
        background-color: inherit;
        border: none;
        outline: none;
        width: 100%;

        &::placeholder {
          font-size: ${({ theme }) => theme.fontSize.sm};
        }
      }
    }
  }

  .topics-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 5rem;
    gap: 3rem;
    overflow-y: auto;
    overflow-x: hidden;
    height: 80%;
    padding: 1rem 1.5rem 1rem 0rem;
    ${scrollbar};

    &--item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      border-radius: 1rem;
      padding: 1rem;
      position: relative;
      background-color: ${({ theme }) => theme.colors.gray};
      border: 1px solid ${({ theme }) => theme.colors.gray_shade};
      cursor: pointer;
      text-align: center;
    }

    &--item__fig {
      width: 4rem;
      height: 4rem;
      border-radius: 100%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        object-fit: cover;
      }
    }

    &--item__checkbox {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(20%, -30%);
      background-color: ${({ theme }) => theme.colors.gray};
      border: 1px solid ${({ theme }) => theme.colors.gray_shade};
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &--item.active {
      border-color: ${({ theme }) => theme.colors.green};
    }

    &--item.active .topics-list--item__checkbox {
      border-color: ${({ theme }) => theme.colors.green};
      background-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .fit-interests__footer {
    display: flex;
    align-items: center;
    gap: 4rem;
    padding-right: 3rem;

    .fit-interests__footer-checkbox {
      text-transform: capitalize;
      display: flex;
      align-items: center;
      gap: 1rem;

      label {
        cursor: pointer;
      }
    }

    .save-btn {
      width: 30rem;
      margin-left: auto;
      border-radius: 1rem;
      padding: 1.2rem 1rem;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.green};
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    .fit-interests__sub-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;

      .fit-interests__search-box {
        width: 100%;
      }
    }

    .topics-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    gap: 2rem;
    margin: 3.5rem 1rem;
    margin-bottom: 1rem;

    .fit-interests__sub-header {
      gap: 1.25rem;
    }

    .topics-list {
      gap: 1.5rem;
    }

    .fit-interests__footer {
      gap: 1rem;
      flex-direction: column;
      align-items: flex-start;

      .fit-interests__footer-checkbox {
        align-self: center;
      }

      .save-btn {
        width: 100%;
        margin: unset;
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    height: 90vh;
    width: 80vw;
    margin: 2.5rem 0rem;
    margin-bottom: 0rem;

    .topics-list {
      &--item {
        font-size: ${({ theme }) => theme.fontSize.sm};
      }
    }

    .fit-interests__footer {
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    margin: 1rem 0rem;
    margin-bottom: -1rem;

    .topics-list {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: 4rem;
    }
  }
`;
