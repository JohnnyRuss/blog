import styled from "styled-components";
import { SectionTitle } from "@/components/Layouts";
import React from "react";

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
    <AsideBlockItemContainerEl>
      <SectionTitle title={title} subTitle={subTitle} />
      {children}
    </AsideBlockItemContainerEl>
  );
};

export default AsideBlockItemContainer;
