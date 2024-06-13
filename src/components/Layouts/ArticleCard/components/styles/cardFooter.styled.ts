import styled from "styled-components";

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1.5rem;

  .card-footer__btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &.save {
      margin-left: auto;
    }

    span {
      line-height: 1;
    }
  }

  svg {
    line-height: 1;
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  .card-footer__btn.save.active svg,
  .card-footer__btn.heart.active svg {
    color: ${({ theme }) => theme.colors.red};
  }
`;
