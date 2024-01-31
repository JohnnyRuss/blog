import { scrollbar } from "@/styles/utils";
import styled from "styled-components";

export const CreateListModal = styled.div`
  height: 60vh;
  width: 100%;
  min-width: 20vw;
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

    .privacy-icon {
      margin-left: auto;
      line-height: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .create-list__footer,
  .list-row__footer {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
    color: ${({ theme }) => theme.colors.green};
  }

  .create-list__box {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .create-list__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;
