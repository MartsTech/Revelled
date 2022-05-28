import Logo from "icons/Logo";
import styled from "styled-components";
import Breakpoints from "styles/Breakpoints";
import LoginLinks from "./components/LoginLinks";
import LoginProviders from "./components/LoginProviders";
import LoginTerms from "./components/LoginTerms";

const Login = () => {
  return (
    <StyledContainer>
      <StyledPlaceholder />
      <StyledLogoContainer>
        <Logo />
      </StyledLogoContainer>
      <StyledMain>
        <LoginTerms />
        <LoginProviders />
      </StyledMain>
      <StyledFooter>
        <StyledPlaceholder>
          <Logo />
        </StyledPlaceholder>
        <LoginLinks />
      </StyledFooter>
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
  flex-direction: column;
  margin: auto;
  padding: 3rem 0;
  gap: 1.875rem;
  background-color: ${({ theme }) => theme.colors.primary[800]};
  z-index: 10;
  width: 100%;

  @media (${Breakpoints.small}) {
    border-radius: 0.5rem;
    width: 25rem;
    padding: 3rem;
  }
`;

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.75rem;
  margin-top: auto;

  @media (${Breakpoints.small}) {
    padding: 1.75rem 3.75rem;
  }
`;
