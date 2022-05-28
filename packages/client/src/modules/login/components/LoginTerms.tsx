import Link from "next/link";
import styled from "styled-components";
import Breakpoints from "styles/Breakpoints";

const LoginTerms = () => {
  return (
    <StyledContainer>
      <StyledTitle>Welcome</StyledTitle>
      <StyledLinks>
        By logging in you accept our&nbsp;
        <Link href="/privacy-policy.html" passHref>
          <StyledLink>Privacy Policy</StyledLink>
        </Link>
        &nbsp;and&nbsp;
        <Link href="/terms.html" passHref>
          <StyledLink>Terms of Service</StyledLink>
        </Link>
        .
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

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize["3xl"]};
  color: ${({ theme }) => theme.colors.primary[100]};
  font-weight: bold;
`;

const StyledLinks = styled.p`
  color: ${({ theme }) => theme.colors.primary[100]};
  flex-wrap: wrap;
`;

const StyledLink = styled.span`
  color: ${({ theme }) => theme.colors.accent["DEFAULT"]};
  text-decoration: none;
  line-height: 1.6rem;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
