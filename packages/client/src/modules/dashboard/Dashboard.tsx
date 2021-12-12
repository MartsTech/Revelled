import Sidebar from "components/sidebar";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <StyledContainer>
      <Sidebar />
    </StyledContainer>
  );
};

export default Dashboard;

const StyledContainer = styled.div``;
