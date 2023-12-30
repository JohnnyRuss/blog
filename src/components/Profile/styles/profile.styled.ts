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
`;
