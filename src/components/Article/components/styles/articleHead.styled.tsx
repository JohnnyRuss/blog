import styled from "styled-components";

export const ArticleHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .article-head__fig {
    border-radius: 1rem;
    overflow: hidden;
    height: 27vw;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);

    img {
      margin-bottom: -2rem;
      border-radius: inherit;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .article-head__sub {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 0 1.5rem;
  }

  &__title {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }
`;
