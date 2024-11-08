import { scrollbar } from "@/styles/utils";
import styled from "styled-components";

export const CreateListModal = styled.div`
  height: 60vh;
  width: 100%;
  min-width: 40rem;
  color: ${({ theme }) => theme.colors.gray_dark};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  .lists-row__wrapper {
    overflow-y: auto;
    ${scrollbar};
    max-height: calc(100% - 5rem);

    .lists-row {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  .lists-row__item label {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.white : theme.colors.gray_dark};

    .privacy-icon {
      margin-left: auto;
      line-height: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }
  }

  .create-list__footer,
  .list-row__footer {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    color: ${({ theme }) => theme.colors.green};
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    min-width: 35rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    min-width: 85vw;
    height: 75vh;
  }
`;
