import styled from "styled-components";
import { motion } from "framer-motion";

export const AsideWhoToFollow = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .follow-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .follow-card {
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    &__fig {
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

    &__content {
      display: flex;
      flex-direction: column;

      &-username {
        text-transform: capitalize;
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize.sm};
      }
    }

    &__btn {
      margin-top: 1rem;
      margin-left: 1rem;
      border-radius: 10rem;
      border: 1px solid ${({ theme }) => theme.colors.green_shade};
      color: ${({ theme }) => theme.colors.green_shade};
      padding: 1rem 1.5rem;
      font-size: ${({ theme }) => theme.fontSize.sm};
      transition: all 0.3s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.green};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  .more-suggestions__btn {
    align-self: flex-start;
    color: ${({ theme }) => theme.colors.green};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.green_tint};
    }
  }
`;
