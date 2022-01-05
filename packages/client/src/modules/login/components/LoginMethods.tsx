import SvgSolidGitHub from "icons/SolidGitHub";
import { FC } from "react";
import { useStore } from "stores/store";
import styled from "styled-components";
import Breakpoints from "styles/Breakpoints";
import { AuthProviders } from "types/auth";
import LoginButton from "./LoginButton";

interface LoginMethodsProps {
  providers: AuthProviders;
}

const LoginMethods: FC<LoginMethodsProps> = ({ providers }) => {
  const { facebookLogin } = useStore().userStore;

  return (
    <StyledContainer>
      {Object.values(providers).map(({ id, name }) => (
        <LoginButton key={name} onClick={() => facebookLogin(id)}>
          <SvgSolidGitHub width={20} height={20} />
          <>Log in with {name}</>
        </LoginButton>
      ))}
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
