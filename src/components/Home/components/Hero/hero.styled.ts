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
        margin-bottom: -1rem;
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

      h3[data-line-clamp] {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }

      div[data-line-clamp] {
        color: ${({ theme }) =>
          theme.mode === "dark" ? theme.colors.gray : theme.colors.gray_dark};
        font-size: ${({ theme }) => theme.fontSize.base};
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop}) {
    .hero__intro-txt {
      font-size: ${({ theme }) => theme.fontSize.h2};
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 1rem;

      span,
      &--welcome {
        line-height: 1;
      }
    }

    .hero__post {
      gap: 2rem;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    .hero__intro-txt {
      font-size: ${({ theme }) => theme.fontSize.h3};
    }

    .hero__post {
      gap: 1rem;
      height: 30vw;

      div[data-line-clamp] {
        -webkit-line-clamp: 5;
      }

      &-content {
        padding: 2rem;
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    .hero__intro-txt {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }

    .hero__post {
      height: auto;
      flex-direction: column;

      &-fig {
        height: 40vh;
        max-height: 40vh;
        flex: 0;
      }

      &-content {
        gap: 1.5rem;
        padding: 0;

        h3[data-line-clamp] {
          font-size: ${({ theme }) => theme.fontSize.lg};
        }

        div[data-line-clamp] {
          font-size: ${({ theme }) => theme.fontSize.sm};
        }
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    gap: 3rem;
    padding: 2rem 0;
  }
`;
