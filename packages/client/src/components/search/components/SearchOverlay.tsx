import { forwardRef } from "react";
import styled from "styled-components";

const SearchOverlay = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, ...props }, ref) => {
  return (
    <StyledContainer ref={ref} {...props}>
      {children}
    </StyledContainer>
  );
});

export default SearchOverlay;

SearchOverlay.displayName = "SearchOverlay";

const StyledContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0.625rem 0;
  min-height: 12.5rem;
  max-height: 50vh;
  width: calc(100% + 1.25rem);
  top: -0.625rem;
  left: -0.625rem;
  right: 0;
  box-shadow: -3px 4px 14px rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary[700]};
  background-color: ${({ theme }) => theme.colors.primary[800]};
`;
