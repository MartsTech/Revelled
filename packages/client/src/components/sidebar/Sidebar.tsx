import SvgSolidCalendar from "icons/SolidCalendar";
import SvgSolidFriends from "icons/SolidFriends";
import SvgSolidHelp from "icons/SolidHelp";
import SvgSolidHome from "icons/SolidHome";
import SvgSolidSettings from "icons/SolidSettings";
import styled from "styled-components";
import SidebarLogo from "./components/SidebarLogo";
import SidebarNav from "./components/SidebarNav";

const Sidebar = () => {
  return (
    <StyledContainer>
      <SidebarLogo />
      <StyledNavs>
        <SidebarNav title="Dashboard" Icon={SvgSolidHome} href="/dash" />
        <SidebarNav title="Calendar" Icon={SvgSolidCalendar} href="/calendar" />
        <SidebarNav title="Friends" Icon={SvgSolidFriends} href="/friends" />
        <SidebarNav title="Help" Icon={SvgSolidHelp} href="/help" />
      </StyledNavs>
      <StyledFooter>
        <SidebarNav title="Settings" Icon={SvgSolidSettings} href="/settings" />
      </StyledFooter>
    </StyledContainer>
  );
};

export default Sidebar;

const StyledContainer = styled.section`
  min-width: 20rem;
  height: 100vh;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.primary[800]};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 3rem 0;

  ::-webkit-scrollbar {
    display: none;
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
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
`;
