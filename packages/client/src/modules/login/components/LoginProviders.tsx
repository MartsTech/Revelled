import SvgSolidGitHub from "icons/SolidGitHub";
import styled from "styled-components";
import Breakpoints from "styles/Breakpoints";
import LoginButton from "./LoginButton";

const LoginMethods = () => {
  return (
    <StyledContainer>
      <LoginButton>
        <SvgSolidGitHub width={20} height={20} />
        <>Log in with {name}</>
      </LoginButton>
    </StyledContainer>
  );
};

export default LoginMethods;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 3rem;

  @media (${Breakpoints.small}) {
    padding: 0;
  }
`;
