import Search from "components/search";
import Sidebar from "components/sidebar";
import styled from "styled-components";
import FeedHeader from "./components/FeedHeader";

const Dashboard = () => {
  return (
    <StyledContainer>
      <Sidebar />
      <StyledMain>
        <Search />
        <StyledFeedContainer>
          <FeedHeader />
        </StyledFeedContainer>
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
  display: flex;
  flex-direction: column;
`;

const StyledFeedContainer = styled.div``;
