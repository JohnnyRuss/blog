import styled from "styled-components";

export const Aside = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: sticky;
  top: 8.5rem;

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    gap: 2rem;
    position: unset;
  }
`;
