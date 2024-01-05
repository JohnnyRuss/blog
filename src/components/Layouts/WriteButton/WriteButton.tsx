import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PATHS } from "@/config/paths";

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="-2 -2 24 24"
      >
        <path
          fill="currentColor"
          d="m5.72 14.456l1.761-.508l10.603-10.73a.456.456 0 0 0-.003-.64l-.635-.642a.443.443 0 0 0-.632-.003L6.239 12.635zM18.703.664l.635.643c.876.887.884 2.318.016 3.196L8.428 15.561l-3.764 1.084a.901.901 0 0 1-1.11-.623a.915.915 0 0 1-.002-.506l1.095-3.84L15.544.647a2.215 2.215 0 0 1 3.159.016zM7.184 1.817c.496 0 .898.407.898.909a.903.903 0 0 1-.898.909H3.592c-.992 0-1.796.814-1.796 1.817v10.906c0 1.004.804 1.818 1.796 1.818h10.776c.992 0 1.797-.814 1.797-1.818v-3.635c0-.502.402-.909.898-.909s.898.407.898.91v3.634c0 2.008-1.609 3.636-3.593 3.636H3.592C1.608 19.994 0 18.366 0 16.358V5.452c0-2.007 1.608-3.635 3.592-3.635z"
        />
      </svg>

      {showTitle && <span>Write</span>}
    </Button>
  );
};

export default WriteButton;