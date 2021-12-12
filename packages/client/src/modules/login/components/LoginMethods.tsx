import SvgSolidDiscord from "icons/SolidDiscord";
import SvgSolidGitHub from "icons/SolidGitHub";
import SvgSolidTwitter from "icons/SolidTwitter";
import { useRouter } from "next/router";
import styled from "styled-components";
import Breakpoints from "styles/Breakpoints";
import LoginButton from "./LoginButton";

const LoginMethods = () => {
  const router = useRouter();

  return (
    <StyledContainer>
      <LoginButton onClick={() => router.push("/dash")}>
        <SvgSolidGitHub width={20} height={20} />
        Log in with GitHub
      </LoginButton>
      <LoginButton onClick={() => router.push("/dash")}>
        <SvgSolidTwitter width={20} height={20} />
        Log in with Twitter
      </LoginButton>
      <LoginButton onClick={() => router.push("/dash")}>
        <SvgSolidDiscord width={20} height={20} />
        Log in with Discord
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
