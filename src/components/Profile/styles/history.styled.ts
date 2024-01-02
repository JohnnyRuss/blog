import styled from "styled-components";

export const History = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .reading-history__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    p {
      font-weight: 300;
      letter-spacing: 0.5px;
      color: ${({ theme }) => theme.colors.gray_shade};
      font-style: italic;
    }

    button {
      background: ${({ theme }) => theme.colors.brown};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 10rem;
      height: 4rem;
      width: 12rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      font-size: ${({ theme }) => theme.fontSize.sm};

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .reading-history__list {
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .reading-history__header {
      flex-direction: column;

      button {
        order: 1;
        width: 90%;
      }

      p {
        order: 2;
        text-align: center;
      }
    }
  }
`;
