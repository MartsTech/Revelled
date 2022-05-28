import Search from "components/search";
import Sidebar from "components/sidebar";
import styled from "styled-components";
import FeedList from "./components/FeedList";
import FeedHeader from "./components/FeedHeader";
import Breakpoints from "styles/Breakpoints";

const Dashboard = () => {
  return (
    <StyledContainer>
      <Sidebar />
      <StyledMain>
        <Search />
        <StyledFeedContainer>
          <FeedHeader />
          <FeedList />
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
  margin-left: -20rem;

  @media (${Breakpoints.portrait}) {
    margin: 0;
  }
`;

const StyledFeedContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
