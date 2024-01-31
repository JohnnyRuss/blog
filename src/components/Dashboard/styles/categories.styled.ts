import styled from "styled-components";

export const Categories = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 0 2rem 2rem 2rem;

  .category-item__layover {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
    border: 1px solid ${({ theme }) => theme.colors.brown};
    border-radius: 0.5rem;
    padding: 1rem;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;

    &:hover {
      border-color: ${({ theme }) => theme.colors.blue};
    }
  }

  .category-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;
