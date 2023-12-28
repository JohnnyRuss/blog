import styled from "styled-components";

export const Articles = styled.section`
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
