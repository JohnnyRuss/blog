import styled from "styled-components";

export const HistoryList = styled.div`
  .loading-skeleton,
  .infinite-scroll-component {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .history-group--box {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &__list {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    &__date {
      color: ${({ theme }) => theme.colors.gray_shade};
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: 600;
    }
  }
`;
