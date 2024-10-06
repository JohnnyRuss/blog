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

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    order: 2;
  }
`;
