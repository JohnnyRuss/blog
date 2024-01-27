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
    background-color: green;

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
    display: flex;
    align-items: center;

    &-name {
      font-weight: 600;
      text-transform: capitalize;
      padding-top: 2px;
    }

    &-work {
      color: ${({ theme }) => theme.colors.gray_shade};
    }
  }
`;
