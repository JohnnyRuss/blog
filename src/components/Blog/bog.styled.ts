import styled from "styled-components";

export const Blog = styled.section`
  padding: 4rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .blog-content__box {
    display: flex;
    gap: 3rem;
  }

  .blog-aside {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    position: sticky;
    top: 8.5rem;
    height: 100%;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    .blog-content__box {
      flex-direction: column;
    }

    .blog-aside {
      gap: 2rem;
      position: unset;
      width: 100%;
      display: none;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    padding-top: 1rem;

    .blog-content__box {
      padding: 0;
    }
  }
`;
