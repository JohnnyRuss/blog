import styled from "styled-components";

export const Profile = styled.section`
  padding: 1.5rem 0.75rem 3rem 0.75rem;
  display: flex;
  gap: 3rem;

  .profile__main-thread {
    flex: 3;
    display: flex;
    flex-direction: column;
  }

  .profile__child-wrapper {
    padding: 2rem 0.5rem 0 0.75rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    flex-direction: column;

    .profile__main-thread {
      order: 2;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    padding: 0 0 1.5rem 0;
    gap: 1.5rem;
  }
`;
