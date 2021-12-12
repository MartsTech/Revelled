import Button from "components/button";
import { FC } from "react";
import styled from "styled-components";

interface LoginButtonProps {
  children: [React.ReactNode, React.ReactNode];
  onClick?: () => void;
}

const LoginButton: FC<LoginButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButton color="secondary" {...props}>
      <StyledContainer>
        {children[0]}
        {children[1]}
      </StyledContainer>
    </StyledButton>
  );
};

export default LoginButton;

const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize["base"]};
  padding: 1.2rem 0;
  margin-top: 0.5rem;
`;

const StyledContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.25rem;
`;
