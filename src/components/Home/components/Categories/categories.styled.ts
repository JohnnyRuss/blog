import styled from "styled-components";

export const Categories = styled.section`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .categories__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    .categories__list {
      justify-content: flex-start;

      li {
        flex: 1;

        div[data-category-chip] {
          width: 100%;
          justify-content: center;
        }
      }
    }
  }
`;
