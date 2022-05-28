import SvgSolidGitHub from "icons/SolidGitHub";
import SvgSolidTwitter from "icons/SolidTwitter";
import styled from "styled-components";

const LoginLinks = () => {
  return (
    <StyledContainer>
      <StyledLink href="/privacy-policy.html">Privacy policy</StyledLink>
      <StyledLink href="https://github.com/MartsTech/Revelled/issues">
        Report a bug
      </StyledLink>
      <StyledLink
        href="https://github.com/MartsTech/Revelled"
        target="_blank"
        rel="noreferrer"
      >
        <SvgSolidGitHub width={20} height={20} />
      </StyledLink>
      <StyledLink
        href="https://twitter.com/martstech"
        target="_blank"
        rel="noreferrer"
      >
        <SvgSolidTwitter width={20} height={20} />
      </StyledLink>
    </StyledContainer>
  );
};

export default LoginLinks;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 2.5rem;
  color: ${({ theme }) => theme.colors.primary[300]};
  padding: 1.5rem 0;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.primary[300]};
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.primary[200]};
  }
`;
