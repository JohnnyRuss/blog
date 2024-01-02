import styled from "styled-components";

export const AsideWhoToFollow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .follow-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
