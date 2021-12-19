import Input from "components/input";
import SvgSolidSearch from "icons/SolidSearch";
import { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";

interface SearchBarProps extends ComponentPropsWithoutRef<"input"> {
  isLoading?: boolean;
}

const SearchBar: FC<SearchBarProps> = ({ isLoading = false, ...props }) => {
  return (
    <StyledSearchBar>
      <StyledIcon />
      <Input autoFocus data-testid="searchbar" {...props} />
    </StyledSearchBar>
  );
};

export default SearchBar;

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary[700]};
  color: ${({ theme }) => theme.colors.primary[300]};
  border-radius: 0.25rem;

  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;

  :focus-within {
    color: ${({ theme }) => theme.colors.primary[100]};
  }
`;

const StyledIcon = styled(SvgSolidSearch)`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 1rem;
  pointer-events: none;
`;
