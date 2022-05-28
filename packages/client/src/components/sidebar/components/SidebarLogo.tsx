// import Logo from "icons/Logo";
import Logo from "icons/Logo";
import LogoIcon from "icons/LogoIcon";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import Breakpoints from "styles/Breakpoints";

interface SidebarLogoProps {
  onClick: () => void;
  active: boolean;
}

const SidebarLogo: FC<SidebarLogoProps> = ({ onClick, active }) => {
  return (
    <StyledContainer active={active}>
      <Link href="/dash" passHref>
        <StyledLogo active={active} onClick={onClick} />
      </Link>
      <StyledLogoIcon active={active} onClick={onClick} />
    </StyledContainer>
  );
};

export default SidebarLogo;

const StyledContainer = styled.div<{ active: boolean }>`
  padding-top: 2rem;
  margin: 0 auto;
  cursor: pointer;
  position: ${({ active }) => (!active ? "absolute" : "static")};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  top: -0.35rem;
  transform: ${({ active }) =>
    !active ? "translateX(17rem)" : "translateX(0)"};

  @media (${Breakpoints.portrait}) {
    transform: translateX(0);
    position: static;
  }
`;

const StyledLogo = styled(Logo)<{ active: boolean }>`
  display: ${({ active }) => (active ? "inline-flex" : "none")};

  @media (${Breakpoints.portrait}) {
    display: inline-flex;
  }
`;

const StyledLogoIcon = styled(LogoIcon)<{ active: boolean }>`
  display: ${({ active }) => (!active ? "inline-flex" : "none")};

  @media (${Breakpoints.portrait}) {
    display: none;
  }
`;
