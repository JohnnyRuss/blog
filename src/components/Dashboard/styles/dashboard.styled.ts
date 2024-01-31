import styled from "styled-components";

export const Dashboard = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
  margin-top: 2rem;

  .dashboard-nav {
    flex: 1;
    max-width: 22rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    min-height: 100%;
    position: sticky;
    top: 10rem;
    height: calc(100vh - 10rem);
    border-right: 1px solid ${({ theme }) => theme.colors.gray};
  }

  .dashboard-content__box {
    flex: 3;
    height: 100%;
  }
`;
