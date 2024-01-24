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

  .infinite-scroll-component__outerdiv {
    flex: 3;
  }
  .infinite-scroll-component {
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(2, 1fr);
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
    .blog-content__box {
      padding: 0;
    }

    .infinite-scroll-component {
      gap: 3rem;
      grid-template-columns: repeat(1, 1fr);
      justify-items: center;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    .infinite-scroll-component {
      gap: 5rem;
    }
  }
`;
