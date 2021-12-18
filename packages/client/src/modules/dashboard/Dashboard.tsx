import Search from "components/search";
import Sidebar from "components/sidebar";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <StyledContainer>
      <Sidebar />
      <StyledMain>
        <Search />
      </StyledMain>
    </StyledContainer>
  );
};

export default Dashboard;

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
`;

const StyledMain = styled.main`
  flex: 1;
`;
