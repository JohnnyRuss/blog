import styled from "styled-components";

export const ReviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  .review-block__title {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  .review-block__more {
    color: ${({ theme }) => theme.colors.green};
    transition: all;

    &:hover {
      text-decoration: underline;
    }
  }
`;
