import styled from "styled-components";

export const UpdateImageField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding-bottom: 3rem;

  .user-settings__img-block--fig {
    width: 12rem;
    height: 12rem;
    border-radius: 100%;
    position: relative;

    img {
      border-radius: inherit;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    label {
      position: absolute;
      right: 0;
      bottom: 0;
      background-color: ${({ theme }) => theme.colors.bg};
      width: 4rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      cursor: pointer;

      &::after {
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        inset: 0;
        border-radius: inherit;
        border: 1px solid ${({ theme }) => theme.colors.bg};
      }

      svg {
        font-size: 26px;
        fill: ${({ theme }) => theme.colors.white};
        position: relative;
        z-index: 2;
      }
    }
  }

  .user-settings__img-block--actions {
    display: flex;
    align-items: center;
    gap: 3rem;

    &__btn {
      font-size: ${({ theme }) => theme.fontSize.sm};
      border: 1px solid;
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      border-color: currentColor;
      color: ${({ theme }) => theme.colors.white};
      height: 3.75rem;
      cursor: pointer;

      &.disabled,
      &:disabled {
        opacity: 0.5;
        cursor: none;
      }

      &.save {
        background-color: ${({ theme }) => theme.colors.green_shade};
      }

      &.cancel {
        background-color: ${({ theme }) => theme.colors.gray_dark};
      }

      &.update {
        background-color: ${({ theme }) => theme.colors.green};
      }

      &.remove {
        background-color: ${({ theme }) => theme.colors.brown};
      }
    }
  }
`;
