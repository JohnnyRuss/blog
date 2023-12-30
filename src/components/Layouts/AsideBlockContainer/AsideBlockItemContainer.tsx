import styled from "styled-components";
import { motion } from "framer-motion";
import { animateBottom } from "@/styles/animations";

import { SectionTitle } from "@/components/Layouts";

type AsideBlockItemContainerT = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
};

const AsideBlockItemContainerEl = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    padding: 3rem 0;
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    padding: 1.5rem 0;
  }
`;

const AsideBlockItemContainer: React.FC<AsideBlockItemContainerT> = ({
  title,
  subTitle,
  children,
}) => {
  return (
    <AsideBlockItemContainerEl data-aside-block>
      <motion.div {...animateBottom({ inView: true, once: true })}>
        <SectionTitle title={title} subTitle={subTitle} />
      </motion.div>

      {children}
    </AsideBlockItemContainerEl>
  );
};

export default AsideBlockItemContainer;
