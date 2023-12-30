import styled from "styled-components";

export const RecentlySaved = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .saved-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__card {
      display: flex;
      flex-direction: column;
    }

    &__card-user {
      display: flex;
      align-items: center;
      gap: 1rem;

      &--fig {
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: inherit;
        }
      }

      &--username {
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize.sm};
      }
    }

    h3[data-line-clamp] {
      font-size: ${({ theme }) => theme.fontSize.base};
    }

    &__card-footer {
      &--date {
        font-size: ${({ theme }) => theme.fontSize.xs};
        color: ${({ theme }) => theme.colors.gray_shade};
      }
    }
  }

  .more-bookmarks__btn {
    align-self: flex-start;
    color: ${({ theme }) => theme.colors.green};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.green_tint};
    }
  }
`;
