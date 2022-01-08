import Search from "components/search";
import Sidebar from "components/sidebar";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import styled from "styled-components";
import FeedHeader from "./components/FeedHeader";

const Dashboard = () => {
  const { user } = useStore().userStore;

  return (
    <StyledContainer>
      <Sidebar />
      <StyledMain>
        <Search />
        <StyledFeedContainer>
          <FeedHeader />
          <div>{user?.displayName}</div>
        </StyledFeedContainer>
      </StyledMain>
    </StyledContainer>
  );
};

export default observer(Dashboard);

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
