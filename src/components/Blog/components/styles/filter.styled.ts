import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  [data-textfield] {
    width: 30rem;
    margin-left: auto;

    input {
      border-radius: 10rem;
      padding-left: 2rem;
    }

    input::placeholder {
      font-style: italic;
      letter-spacing: 1px;
    }
  }

  .categories-slider__container {
    padding: 0 4rem;
    width: calc(100% - 36rem);
    height: 4rem;
    display: flex;
    align-items: center;
    position: relative;

    button {
      position: absolute;
      top: 0;
      bottom: 0;
      height: 4rem;
      width: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${({ theme }) => theme.fontSize.xl};
    }

    button.prev {
      left: 0;
    }

    button.next {
      right: 0;
    }
  }

  .slick-slider {
    width: 100%;

    .slick-track {
      display: flex;
      gap: 2rem;
    }

    .category-slide {
      cursor: pointer;
    }

    .category-slide.active {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray_shade};
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    gap: 0rem;

    [data-textfield] {
      width: 20rem;
    }

    .categories-slider__container {
      width: calc(100% - 20rem);
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    flex-direction: column;
    gap: 1.2rem;

    [data-textfield] {
      width: 100%;
    }

    .categories-slider__container {
      width: 100%;
    }
  }
`;
