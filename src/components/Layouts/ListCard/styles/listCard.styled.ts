import styled from "styled-components";

export const ListCard = styled.li`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  width: 100%;

  a:hover {
    text-decoration: underline;
  }

  .list-card__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    width: 60%;

    &-user {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      &--fig {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &--username {
        text-transform: capitalize;
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize.sm};
      }
    }

    &-count {
      font-size: ${({ theme }) => theme.fontSize.sm};
      color: ${({ theme }) => theme.colors.gray_shade};
    }

    &-title {
      width: max-content;
    }
  }

  .list-card__assets {
    display: flex;
    gap: 0.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
    width: 40%;
    align-self: stretch;

    &-fig {
      overflow: hidden;
      border-radius: inherit;
      background-color: ${({ theme }) => theme.colors.gray_shade};

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &-fig:first-child {
      flex: 3;
    }

    &-fig:nth-child(2) {
      flex: 2;
    }

    &-fig:last-child {
      flex: 1;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    flex-direction: column;
    gap: 1rem;

    .list-card__content {
      width: 100%;
      order: 2;
    }

    .list-card__assets {
      width: 100%;
      order: 1;
    }
  }
`;
