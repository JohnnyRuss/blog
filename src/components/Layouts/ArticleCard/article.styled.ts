import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticleCardBig = styled(Link)`
  .article-card {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;

    &__fig {
      align-self: stretch;
      width: 40%;
      padding: 0;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);

      img {
        width: 100%;
        min-height: 100%;
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
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    .article-card {
      div[data-line-clamp] {
        -webkit-line-clamp: 4;
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .article-card {
      flex-direction: column;
      gap: 1rem;

      &-fig {
        width: 100%;
        height: 28vh;
      }

      &-content {
        width: 100%;
        padding: 1rem 0;
        gap: 1rem;
      }

      div[data-line-clamp] {
        -webkit-line-clamp: 4;
      }
    }
  }
`;

export const ArticleCardMedium = styled(Link)`
  max-width: 37rem;

  .article-md__body {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &-fig {
      width: 100%;
      height: 50%;
      border-radius: 0.5rem;
      overflow: hidden;

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
      height: 50%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    &-content--text {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    &-content--about {
      display: flex;
      align-items: center;
      gap: 1rem;

      &__date {
        font-size: ${({ theme }) => theme.fontSize.xs};
        color: ${({ theme }) => theme.colors.gray_shade};
      }
    }
  }
`;

export const ArticleCardSmall = styled(Link)`
  width: 100%;

  .article-sm__body {
    height: 100%;
    width: 100%;
    display: flex;
    gap: 3rem;

    &-fig {
      width: 30%;
      min-height: 100%;
      border-radius: 0.5rem;
      overflow: hidden;

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

    &-content--text {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;
