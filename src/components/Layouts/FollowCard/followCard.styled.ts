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
    width: 70%;

    &-username {
      text-transform: capitalize;
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }

  .follow-card__btn {
    margin-top: 1rem;
    margin-left: auto;
    border-radius: 10rem;
    border: 1px solid
      ${({ theme }) =>
        theme.mode === "dark" ? theme.colors.text : theme.colors.green_shade};
    color: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.text : theme.colors.green_shade};
    padding: 1rem 1.5rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
      border-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
