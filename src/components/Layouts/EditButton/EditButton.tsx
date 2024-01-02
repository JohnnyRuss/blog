import styled from "styled-components";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 36 36"
      >
        <path
          fill="currentColor"
          d="M33.87 8.32L28 2.42a2.07 2.07 0 0 0-2.92 0L4.27 23.2l-1.9 8.2a2.06 2.06 0 0 0 2 2.5a2.14 2.14 0 0 0 .43 0l8.29-1.9l20.78-20.76a2.07 2.07 0 0 0 0-2.92M12.09 30.2l-7.77 1.63l1.77-7.62L21.66 8.7l6 6ZM29 13.25l-6-6l3.48-3.46l5.9 6Z"
        />
        <path fill="none" d="M0 0h36v36H0z" />
      </svg>
    </Button>
  );
};

export default EditButton;
