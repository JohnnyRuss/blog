import styled from "styled-components";

export const Blog = styled.section`
  padding: 4rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .blog-articles__list {
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;
