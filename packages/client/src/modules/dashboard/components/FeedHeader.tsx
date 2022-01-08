import Button from "components/button";
import { useStore } from "stores/store";
import styled from "styled-components";

const FeedHeader = () => {
  const { logout } = useStore().userStore;

  return (
    <StyledContainer>
      <StyledTitle>Your Feed</StyledTitle>
      <StyledButton onClick={logout}>New Event</StyledButton>
    </StyledContainer>
  );
};

export default FeedHeader;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`;

const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize["xl"]};
`;

const StyledButton = styled(Button)``;
