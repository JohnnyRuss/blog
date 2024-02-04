import styled from "styled-components";

export const ListDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .list-header__details-title {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 600;
  }

  .list-header__details-date {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;
