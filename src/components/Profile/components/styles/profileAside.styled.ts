import styled from "styled-components";

export const ProfileAside = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: sticky;
  top: 8.5rem;
  height: 100%;

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    gap: 2rem;
    position: unset;
    width: 100%;
  }
`;
