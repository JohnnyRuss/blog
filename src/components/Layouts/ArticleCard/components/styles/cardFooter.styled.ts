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

    svg {
      font-size: 24px;
      line-height: 1;
    }
  }
`;
