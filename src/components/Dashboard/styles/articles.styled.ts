import styled from "styled-components";

export const Articles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 4rem;
  padding: 2rem 2rem 5rem 2rem;

  .article-card__layover {
    position: relative;
  }
`;
