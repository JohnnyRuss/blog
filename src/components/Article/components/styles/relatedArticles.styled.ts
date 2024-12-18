import styled from "styled-components";

export const RelatedArticles = styled.section`
  margin-top: 3rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};

  .articles-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
  }

  h3[data-line-clamp] {
    -webkit-line-clamp: 1;
  }

  div[data-line-clamp] {
    -webkit-line-clamp: 4;
  }

  .article-card {
    height: 26rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    .articles-container {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .article-card {
      height: auto;
    }
  }
`;
