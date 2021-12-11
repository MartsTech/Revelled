import styled from "styled-components";
import Breakpoints from "styles/Breakpoints";

const LoginTerms = () => {
  return (
    <StyledContainer>
      <StyledTitle>Welcome</StyledTitle>
      <StyledLinks>
        By logging in you accept our&nbsp;
        <StyledLink href="/privacy-policy.html">Privacy Policy</StyledLink>
        &nbsp;and&nbsp;
        <StyledLink href="/terms.html">Terms of Service</StyledLink>.
      </StyledLinks>
    </StyledContainer>
  );
};

export default LoginTerms;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 3rem;

  @media (${Breakpoints.small}) {
    padding: 0;
  }
`;

const StyledTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize["3xl"]};
  color: ${({ theme }) => theme.colors.primary[100]};
  font-weight: bold;
`;

const StyledLinks = styled.div`
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
