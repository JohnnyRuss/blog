import styled from "styled-components";

export const AuthorIdentifier = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .user-avatar--fig {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .user-avatar--details {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    &__username {
      font-weight: 600;
      line-height: 1;
      text-transform: capitalize;

      &:hover {
        text-decoration: underline;
      }
    }

    &__date {
      font-size: ${({ theme }) => theme.fontSize.xs};
      color: ${({ theme }) => theme.colors.gray_shade};
      line-height: 1;
    }
  }
`;
