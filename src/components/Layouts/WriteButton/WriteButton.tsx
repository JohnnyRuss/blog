import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PATHS } from "@/config/paths";

import { NotePencil } from "@/components/Layouts/Icons";

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.gray_shade};

  svg {
    font-size: 24px;
    line-height: 1;
  }

  span {
    line-height: 1;
    padding-top: 0.5rem;
  }
`;

type WriteButtonT = {
  showTitle?: boolean;
};

const WriteButton: React.FC<WriteButtonT> = ({ showTitle = true }) => {
  const navigate = useNavigate();

  const onWrite = () => navigate(PATHS.write);

  return (
    <Button onClick={onWrite} data-write-btn title="Write Post">
      <NotePencil />
      {showTitle && <span>Write</span>}
    </Button>
  );
};

export default WriteButton;
