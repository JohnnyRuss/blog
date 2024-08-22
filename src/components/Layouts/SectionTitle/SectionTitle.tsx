import styled from "styled-components";

type SectionTitleT = {
  title: string;
  subTitle?: string;
};

const SectionTitleEl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .sub-title {
    line-height: 1;
    letter-spacing: 0.5px;
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.gray_shade};
  }

  .title {
    line-height: 1;
    font-weight: 600;
    display: inline-block;
    letter-spacing: 0.75px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const SectionTitle: React.FC<SectionTitleT> = ({ title, subTitle }) => {
  return (
    <SectionTitleEl data-section-title>
      {subTitle && <span className="sub-title">{subTitle}</span>}
      <span className="title">{title}</span>
    </SectionTitleEl>
  );
};

export default SectionTitle;
