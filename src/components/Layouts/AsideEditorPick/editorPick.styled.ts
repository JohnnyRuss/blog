import styled from "styled-components";

export const EditorPick = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  .editor-pick__item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .editor-pick__item-fig {
    width: 7rem;
    height: 7rem;
    min-width: 7rem;
    border-radius: 100%;
    overflow: hidden;
    border: 2px solid ${({ theme }) => theme.colors.brown};
    padding: 0.2rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }

  .editor-pick__item-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .editor-pick__item-footer {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: ${({ theme }) => theme.fontSize.xs};

    &--author {
      font-weight: 600;
    }

    &--date {
      color: ${({ theme }) => theme.colors.gray_shade};
    }
  }
`;
