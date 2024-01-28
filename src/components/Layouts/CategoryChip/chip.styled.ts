import styled from "styled-components";
import { hexToRGBA } from "@/utils";

export const CategoryChip = styled.div<{ $bg_color: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 4.5rem;
  border-radius: 0.5rem;
  width: max-content;
  cursor: pointer;

  &.size-sm {
    border-radius: 5rem;
    padding: 0.2rem 1.8rem;
    background-color: ${({ $bg_color }) => $bg_color};
    color: ${({ theme }) => theme.colors.white};
  }

  &.size-md {
    padding: 0.6rem 1.4rem;
  }

  &.size-md,
  &.size-lg {
    background-color: ${({ $bg_color, theme }) =>
      theme.mode === "light" ? hexToRGBA($bg_color, "0.4") : $bg_color};
    color: ${({ theme }) =>
      theme.mode === "light" ? theme.colors.gray_dark : theme.colors.white};
  }

  &.size-sm .categories__list-item--label {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }

  &.size-md .categories__list-item--label,
  &.size-lg .categories__list-item--label {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  .categories__list-item--fig {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
`;
