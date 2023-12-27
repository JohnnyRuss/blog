import styled from "styled-components";

export const Hero = styled.section`
  padding: 5rem 0 5.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  .hero__intro-txt {
    font-size: ${({ theme }) => theme.fontSize.h1};
    font-weight: 500;

    span {
      text-shadow: 2px 4px 5px rgba(0, 0, 0, 0.4);
    }

    &--welcome {
      font-weight: 700;
    }
  }

  .hero__post {
    display: flex;
    gap: 3rem;
    height: 48vh;

    &-fig {
      flex: 1;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
      overflow: hidden;

      img {
        object-fit: cover;
        object-position: center;
      }
    }

    &-content {
      flex: 1;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      padding: 4rem;
    }
  }
`;
