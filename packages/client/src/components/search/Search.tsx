import styled from "styled-components";
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
  margin: 1.5rem;
`;
