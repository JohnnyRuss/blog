import styled from "styled-components";

export const CardHead = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .card-head__fig {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    overflow: hidden;

    img {
      border-radius: inherit;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .card-head__user {
    font-size: ${({ theme }) => theme.fontSize.sm};

    &-name {
      font-weight: 600;
    }

    &-work {
      color: ${({ theme }) => theme.colors.gray_shade};
    }
  }
`;
