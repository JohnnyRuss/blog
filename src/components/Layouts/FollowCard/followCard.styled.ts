import styled from "styled-components";

export const FollowCard = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;

  .follow-card__fig {
    width: 5rem;
    min-width: 5rem;
    height: 5rem;
    border-radius: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: inherit;
    }
  }

  .follow-card__content {
    display: flex;
    flex-direction: column;
    width: 100%;

    &-username {
      text-transform: capitalize;
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }
`;
