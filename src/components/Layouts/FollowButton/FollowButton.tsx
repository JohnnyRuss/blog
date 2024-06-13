import styled from "styled-components";

const StyledFollowButton = styled.button`
  border-radius: 10rem;
  border: 1px solid
    ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.text : theme.colors.green_shade};
  color: ${({ theme }) =>
    theme.mode === "dark" ? theme.colors.text : theme.colors.green_shade};
  padding: 1rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  transition: all 0.3s ease;
  width: 10rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }

  &.following {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }

  &:disabled {
    cursor: none;
  }
`;

type FollowButtonT = {
  isFollowing: boolean;
  onClick: () => void;
  disabled: boolean;
};

const FollowButton: React.FC<FollowButtonT> = ({
  onClick,
  disabled,
  isFollowing,
}) => {
  return (
    <StyledFollowButton
      onClick={onClick}
      disabled={disabled}
      className={`follow-card__btn ${isFollowing ? "following" : ""}`}
    >
      {isFollowing ? "Following" : "Follow"}
    </StyledFollowButton>
  );
};

export default FollowButton;
