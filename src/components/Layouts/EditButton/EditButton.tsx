import styled from "styled-components";

import { Edit } from "@/components/Layouts/Icons";

const Button = styled.button`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.gray_shade};
  align-self: flex-start;
  margin-top: 3rem;
`;

type EditButtonT = {
  onClick: () => void;
};

const EditButton: React.FC<EditButtonT> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Edit />
    </Button>
  );
};

export default EditButton;
