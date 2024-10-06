import styled from "styled-components";

export const Aside = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: sticky;
  top: 8.5rem;

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    gap: 4rem;
    position: unset;
    width: 100%;
    order: 1;
    flex-direction: row;

    [data-aside-block]:first-child {
      border-right: 1px solid ${({ theme }) => theme.colors.text};
      padding-right: 2rem;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    flex-direction: column;

    [data-aside-block]:first-child {
      border: none;
      padding-right: 0rem;
    }
  }
`;
