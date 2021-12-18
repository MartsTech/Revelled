import SearchBar from "components/search";
import Sidebar from "components/sidebar";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <StyledContainer>
      <Sidebar />
      <StyledMain>
        <SearchBar />
      </StyledMain>
    </StyledContainer>
  );
};

export default Dashboard;

const StyledContainer = styled.div`
  display: flex;
`;

const StyledMain = styled.main``;
