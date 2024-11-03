import styled, { css } from "styled-components";

const figBackdropColor = css`
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const ArticleCardBig = styled.div`
  .article-card {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;
    height: 35rem;

    &__fig {
      align-self: stretch;
      width: 40%;
      height: 100%;
      padding: 0;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
      ${figBackdropColor};

      img {
        width: 100%;
        height: 100%;
        max-height: 100%;
        margin-bottom: -1rem;
        object-fit: cover;
        border-radius: inherit;
      }
    }

    &__content {
      width: 60%;
      padding: 2rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      align-items: flex-start;

      &-header {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
      }
    }

    &:not(:has(figure.article-card__fig)) .article-card__content {
      width: 100%;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    .article-card {
      div[data-line-clamp] {
        -webkit-line-clamp: 7;
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .article-card {
      flex-direction: column;
      gap: 1rem;
      height: 45rem;

      &__fig {
        width: 100%;
        height: 45%;
        background-color: red;
      }

      &__content {
        width: 100%;
        padding: 1rem 0;
        gap: 1rem;
      }

      h3[data-line-clamp] {
        line-clamp: 1 !important;
        -webkit-line-clamp: 1 !important;
      }

      &:not(:has(figure.article-card__fig)) .article-card__content {
        height: 100%;

        div[data-line-clamp] {
          line-clamp: 13 !important;
          -webkit-line-clamp: 13 !important;
        }
      }

      &:has(figure.article-card__fig) .article-card__content {
        height: 55%;

        div[data-line-clamp] {
          line-clamp: 4 !important;
          -webkit-line-clamp: 4 !important;
        }
      }
    }
  }
`;

export const ArticleCardMedium = styled.div`
  max-width: 37rem;
  height: 40rem;
  display: flex;

  .article-md__body {
    height: 100%;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &-fig {
      width: 100%;
      height: 40%;
      border-radius: 0.5rem;
      overflow: hidden;
      ${figBackdropColor};

      img {
        margin-bottom: -2rem;
        border-radius: inherit;
        width: 100%;
        max-width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &-content {
      height: 60%;
      max-width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    &:not(:has(figure.article-md__body-fig)) .article-md__body-content {
      height: 100%;
    }

    &-content--text {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 100%;

      &__description {
        background: indigo !important;
        font-size: ${({ theme }) => theme.fontSize.sm};
      }
    }

    &-content--about {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-top: auto;

      &__date {
        font-size: ${({ theme }) => theme.fontSize.xs};
        color: ${({ theme }) => theme.colors.gray_shade};
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .article-md__body {
      &-content--about {
        margin: unset;
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    .article-md__body {
      &-content {
        gap: 1rem;
      }
    }
  }
`;

export const ArticleCardSmall = styled.div`
  width: 100%;

  .article-sm__body {
    height: 100%;
    width: 100%;
    display: flex;
    gap: 3rem;
    height: 24rem;

    &-fig {
      width: 30%;
      min-height: 100%;
      border-radius: 0.5rem;
      overflow: hidden;
      ${figBackdropColor};

      img {
        margin-bottom: -2rem;
        border-radius: inherit;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &-content {
      width: 70%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    &:not(:has(figure.article-sm__body-fig)) .article-sm__body-content {
      width: 100%;
    }

    &-content--text {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    &-content--title:hover {
      text-decoration: underline;
    }

    @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
      gap: 2rem;
      height: 17rem;

      &-fig {
        display: none;
      }

      &-content {
        gap: 1rem;
        width: 100%;
      }

      &-content--text div[data-line-clamp] {
        line-clamp: 3;
        -webkit-line-clamp: 3;
      }
    }
  }
`;
