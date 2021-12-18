import Logo from "icons/Logo";
import Link from "next/link";
import styled from "styled-components";

const SidebarLogo = () => {
  return (
    <Link href="/dash" passHref>
      <StyledContainer>
        <Logo />
      </StyledContainer>
    </Link>
  );
};

export default SidebarLogo;

const StyledContainer = styled.div`
  padding-top: 1.5rem;
  margin: 0 auto;
  cursor: pointer;
`;
