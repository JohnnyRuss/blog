import styled from "styled-components";
import { scrollbar } from "@/styles/utils";

export const UserInterestsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: auto;
  grid-auto-flow: row dense;
  gap: 2rem;
  align-content: flex-start;
  width: 100%;

  .interest-wrapper {
    position: relative;

    .remove-interest__btn {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      width: 2.5rem;
      height: 2.5rem;
      line-height: 1;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  [data-category-chip] {
    width: 100%;
    padding: 1.2rem 2.2rem;
    height: max-content;
  }

  &.editable {
    width: 50vw;
    height: 25vw;
    overflow-y: auto;
    padding: 0rem 2rem;
    ${scrollbar}
  }

  &.editable.recent {
    height: auto;
    overflow-y: unset;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    &.editable {
      width: 70rem;
      height: 50vw;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    &.editable {
      width: 100%;
      height: 60vh;
    }
  }
`;
