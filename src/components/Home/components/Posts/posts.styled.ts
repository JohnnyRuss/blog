import styled from "styled-components";

export const Posts = styled.section`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-left: 0.75rem;

  .posts-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .posts-list__item {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;

    &-fig {
      align-self: stretch;
      width: 40%;
      padding: 0;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);

      img {
        width: 100%;
        min-height: 100%;
        margin-bottom: -1rem;
        object-fit: cover;
        border-radius: inherit;
      }
    }

    &-content {
      width: 60%;
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      align-items: flex-start;

      &--header {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
      }

      &--header__user {
        display: flex;
        align-items: center;
        gap: 1rem;

        &-fig {
          width: 4rem;
          height: 4rem;
          border-radius: 100%;
          overflow: hidden;
          border: 1px solid ${({ theme }) => theme.colors.gray_shade};

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &-block {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;

          &--username {
            font-weight: 600;
            line-height: 1;
          }

          &--date {
            font-size: ${({ theme }) => theme.fontSize.xs};
            color: ${({ theme }) => theme.colors.gray_shade};
            line-height: 1;
          }
        }
      }
    }
  }

  .pagination-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3rem;
    padding: 0 2rem;

    &__btn {
      background-color: ${({ theme }) => theme.colors.brown};
      color: ${({ theme }) => theme.colors.white};
      padding: 1rem 3rem;
      border-radius: 1rem;
      cursor: pointer;
    }
  }
`;
