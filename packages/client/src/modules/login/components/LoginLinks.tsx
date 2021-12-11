import SvgSolidDiscord from "icons/SolidDiscord";
import SvgSolidGitHub from "icons/SolidGitHub";
import styled from "styled-components";
import Breakpoints from "styles/Breakpoints";

const LoginLinks = () => {
  return (
    <StyledContainer>
      <StyledLink href="/privacy-policy.html">Privacy policy</StyledLink>
      <StyledLink href="https://github.com/MartsTech/Revelled/issues">
        Report a bug
      </StyledLink>
      <StyledContacts>
        <StyledLink
          href="https://github.com/MartsTech/Revelled"
          target="_blank"
          rel="noreferrer"
        >
          <SvgSolidGitHub width={20} height={20} />
        </StyledLink>
        <StyledLink href="https://discord.gg" target="_blank" rel="noreferrer">
          <SvgSolidDiscord width={20} height={20} />
        </StyledLink>
      </StyledContacts>
    </StyledContainer>
  );
};

export default LoginLinks;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  color: ${({ theme }) => theme.colors.primary[300]};
  padding: 1.5rem 0;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.primary[300]};
  text-decoration: none;

  text-align: center;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.primary[200]};
  }
`;

const StyledContacts = styled.div`
  display: flex;
  gap: 1.75rem;
`;
