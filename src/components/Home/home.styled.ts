import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: column;

  .content-box {
    padding: 4rem 0;
    display: flex;
    align-items: flex-start;
    gap: 3rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    .content-box {
      flex-direction: column;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .content-box {
      padding: 0;
    }
  }
`;
