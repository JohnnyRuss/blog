import styled from "styled-components";

export const ListHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .list-header__sub-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .list-header__actions-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.75rem;
  }

  .privacy-icon {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
