import Logo from "icons/Logo";
import styled from "styled-components";
import Breakpoints from "styles/Breakpoints";
import LoginButton from "./components/LoginButton";

const Login = () => {
  return (
    <StyledContainer>
      <StyledPlaceholder />
      <StyledLogoContainer>
        <Logo />
      </StyledLogoContainer>
      <StyledMain>
        <StyledTextContainer>
          <StyledWelcome>Welcome</StyledWelcome>
          <StyledMessageContainer>
            By logging in you accept our&nbsp;
            <StyledLink href="/privacy-policy.html">Privacy Policy</StyledLink>
            &nbsp;and&nbsp;
            <StyledLink>Terms of Service</StyledLink>.
          </StyledMessageContainer>
        </StyledTextContainer>
        <StyledLoginContainer>
          <LoginButton>Test</LoginButton>
        </StyledLoginContainer>
      </StyledMain>
    </StyledContainer>
  );
};

export default Login;

const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 1fr auto 1fr;
`;

const StyledPlaceholder = styled.div`
  display: none;

  @media (${Breakpoints.small}) {
    display: flex;
  }
`;

const StyledLogoContainer = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;

  @media (${Breakpoints.small}) {
    display: none;
  }
`;

const StyledMain = styled.main`
  display: flex;
  margin: auto;
  flex-direction: column;
  padding: 2.5rem 0;
  gap: 1.75rem;
  background-color: ${({ theme }) => theme.colors.primary[800]};
  z-index: 10;
  width: 100%;

  @media (${Breakpoints.small}) {
    border-radius: 0.5rem;
    width: 25rem;
    padding: 2.5rem;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 2.5rem;

  @media (${Breakpoints.small}) {
    padding: 0;
  }
`;

const StyledWelcome = styled.span`
  font-size: ${({ theme }) => theme.fontSize["3xl"]};
  color: ${({ theme }) => theme.colors.primary[100]};
  font-weight: bold;
`;

const StyledMessageContainer = styled.div`
  color: ${({ theme }) => theme.colors.primary[100]};
  flex-wrap: wrap;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.accent["DEFAULT"]};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
