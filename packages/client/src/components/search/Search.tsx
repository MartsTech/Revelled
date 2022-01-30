import styled from "styled-components";
import Breakpoints from "styles/Breakpoints";
import SearchBar from "./components/SearchBar";
import SearchOverlay from "./components/SearchOverlay";

const Search = () => {
  return (
    <StyledSearch>
      <SearchBar placeholder="Search for events, users or categories" />
      {false && <SearchOverlay>Test</SearchOverlay>}
    </StyledSearch>
  );
};

export default Search;

const StyledSearch = styled.div`
  position: relative;
  margin: 2rem;
  margin-left: 4.5rem;

  @media (${Breakpoints.portrait}) {
    margin-left: 2rem;
  }
`;
