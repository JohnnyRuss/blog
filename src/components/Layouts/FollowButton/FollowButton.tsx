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

  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }
`;

type FollowButtonT = {};

const FollowButton: React.FC<FollowButtonT> = () => {
  return (
    <StyledFollowButton className="follow-card__btn">Follow</StyledFollowButton>
  );
};

export default FollowButton;
