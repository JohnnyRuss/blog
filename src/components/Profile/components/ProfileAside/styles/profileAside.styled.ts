import styled from "styled-components";

export const ProfileAside = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: sticky;
  top: 8.5rem;
  height: 100%;
  margin-left: auto;
  max-width: 30rem;

  .user-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_shade};
    padding: 1rem 0 3rem 0;

    &__fig {
      border-radius: 100%;
      overflow: hidden;
      width: 9.5rem;
      height: 9.5rem;
      background-color: ${({ theme }) => theme.colors.gray};

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;

      &-username {
        text-transform: capitalize;
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize.lg};
      }

      &-edit--btn {
        color: ${({ theme }) => theme.colors.green};
        text-decoration: underline;
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    gap: 2rem;
    position: unset;
    width: 100%;
    margin: auto;

    .user-details {
      border: none;
    }

    [data-aside-block] {
      display: none;
    }
  }
`;
