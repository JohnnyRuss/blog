import styled from "styled-components";
import { motion } from "framer-motion";

export const Categories = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    div[data-category-chip] {
      flex: 1;
      justify-content: center;
    }
  }
`;
