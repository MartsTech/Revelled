import SvgSolidCalendar from "icons/SolidCalendar";
import SvgSolidFriends from "icons/SolidFriends";
import SvgSolidHelp from "icons/SolidHelp";
import SvgSolidHome from "icons/SolidHome";
import SvgSolidSettings from "icons/SolidSettings";
import { useState } from "react";
import styled from "styled-components";
import Breakpoints from "styles/Breakpoints";
import SidebarLogo from "./components/SidebarLogo";
import SidebarNav from "./components/SidebarNav";

const Sidebar = () => {
  const [active, setActive] = useState(false);

  return (
    <StyledContainer active={active}>
      <SidebarLogo
        active={active}
        onClick={() => setActive((state) => !state)}
      />
      <StyledNavs>
        <SidebarNav
          title="Dashboard"
          Icon={SvgSolidHome}
          href="/dash"
          active={active}
          onClick={() => setActive((state) => !state)}
        />
        <SidebarNav
          title="Calendar"
          Icon={SvgSolidCalendar}
          href="/calendar"
          active={active}
          onClick={() => setActive((state) => !state)}
        />
        <SidebarNav
          title="Friends"
          Icon={SvgSolidFriends}
          href="/friends"
          active={active}
          onClick={() => setActive((state) => !state)}
        />
        <SidebarNav
          title="Help"
          Icon={SvgSolidHelp}
          href="/help"
          active={active}
          onClick={() => setActive((state) => !state)}
        />
      </StyledNavs>
      <StyledFooter>
        <SidebarNav
          title="Settings"
          Icon={SvgSolidSettings}
          href="/settings"
          active={active}
          onClick={() => setActive((state) => !state)}
        />
      </StyledFooter>
    </StyledContainer>
  );
};

export default Sidebar;

const StyledContainer = styled.section<{ active: boolean }>`
  min-width: 20rem;
  height: 100vh;
  z-index: 99;
  background: ${({ theme }) => theme.colors.primary[800]};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  transform: ${({ active }) =>
    !active ? "translateX(-20rem)" : "translateX(0)"};
  width: ${({ active }) => active && "100%"};

  ::-webkit-scrollbar {
    display: none;
  }

  @media (${Breakpoints.portrait}) {
    transform: translateX(0);
  }

  @media (${Breakpoints.mobile}) {
    max-width: 20rem;
  }
`;

const StyledNavs = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

const StyledFooter = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
`;
