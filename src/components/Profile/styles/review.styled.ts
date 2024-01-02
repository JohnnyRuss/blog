import styled from "styled-components";

export const Review = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  .review-block {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 2rem;

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    }

    &__title {
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.xl};
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    &__more {
      color: ${({ theme }) => theme.colors.green};
      transition: all;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
