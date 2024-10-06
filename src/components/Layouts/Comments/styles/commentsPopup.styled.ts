import styled, { keyframes } from "styled-components";
import { scrollbar } from "@/styles/utils";

const popup_animation = keyframes`
  0%{
    transform: translateY(100%);
  }
  100%{
    transform: translateY(0%);
  }
`;

export const CommentsPopup = styled.div`
  position: fixed;
  z-index: 999;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? `rgba(0, 0, 0, 0.8)
    radial-gradient(
      ellipse at top,
      rgba(235, 239, 242, 0.3) 50%,
      rgba(208, 216, 217, 0.2) 75%,
      rgba(191, 191, 189, 0.2) 85%
    )`
      : `rgba(299, 299, 299, 0.8)
    radial-gradient(
      ellipse at top,
      rgba(235, 239, 242, 0.5) 50%,
      rgba(208, 216, 217, 0.5) 75%,
      rgba(191, 191, 189, 0.5) 85%
    )`};
  backdrop-filter: blur(2px);
  inset: 0;
  top: 75px;
  border-top-left-radius: 8rem;
  border-top-right-radius: 8rem;
  box-shadow: ${({ theme }) => theme.boxShadow.radial_lg};
  border-top: 1px solid ${({ theme }) => theme.colors.gray_shade};
  overflow: hidden;
  padding: 4.5rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  animation: ${popup_animation} 0.3s ease forwards;

  .comments-popup__header,
  .comments-popup__header .wrapper {
    min-height: auto !important;
  }

  .comments-popup__header .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .close-btn {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  .comments-popup__content-box--container,
  .comments-popup__content-box--container .wrapper {
    min-height: unset !important;
    height: 100%;
  }

  .content-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
  }

  .content-box .comments-list {
    width: 100%;
    height: 100%;
    max-height: 68vh;
    overflow-y: auto;
    ${scrollbar};
    padding: 0 2rem;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &--item {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;

      &__wrapper {
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: 2rem;
      }

      .comments-list--item__fig {
        width: 5rem;
        height: 5rem;
        min-width: 5rem;
        border-radius: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .comments-list--item__content {
        position: relative;
        width: 100%;

        &-username {
          font-weight: 600;
          text-transform: capitalize;
        }

        &-text {
          color: ${({ theme }) =>
            theme.mode === "dark"
              ? theme.colors.white
              : theme.colors.gray_dark};
        }

        &-date {
          font-weight: 500;
          font-size: ${({ theme }) => theme.fontSize.xs};
        }

        button {
          position: absolute;
          right: 2.5rem;
          top: -1.75rem;
        }

        .comment-options {
          right: 0;
          left: unset;
        }

        .comment-options span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }

      [data-error-message] {
        margin-left: 7rem;
        width: max-content;
      }
    }
  }

  .content-box [data-comment-form] {
    margin-top: auto;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    border-top-left-radius: 4rem;
    border-top-right-radius: 4rem;
    padding-top: 2.5rem;
    gap: 2rem;

    .comments-popup__content-box--container .wrapper {
      padding: 0;
    }

    .content-box .comments-list {
      padding: 0;
    }
  }
`;
