import SvgSolidGitHub from "icons/SolidGitHub";
import { useStore } from "stores/store";
import styled from "styled-components";
import Breakpoints from "styles/Breakpoints";
import LoginButton from "./LoginButton";

const LoginMethods = () => {
  const { login } = useStore().userStore;

  return (
    <StyledContainer>
      <LoginButton
        onClick={() => login({ email: "bob@test.com", password: "Pa$$w0rd" })}
      >
        <SvgSolidGitHub width={20} height={20} />
        <>Log in with GitHub</>
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
