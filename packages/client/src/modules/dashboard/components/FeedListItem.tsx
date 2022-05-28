import Link from "next/link";
import type { FC } from "react";
import styled from "styled-components";
import type { Event } from "types/event";

interface FeedListItemProps {
  group: string;
  events: Event[];
}

const FeedListItem: FC<FeedListItemProps> = ({ group, events }) => {
  return (
    <StyledContainer>
      <StyledGroup>{group}</StyledGroup>
      {events.map(({ id, title, hostUsername, description }) => (
        <Link key={id} href={`/events/${id}`} passHref>
          <StyledEvent>
            <StyledTitle>{title}</StyledTitle>
            <StyledHosted>
              Hosted by {hostUsername} - {description}
            </StyledHosted>
          </StyledEvent>
        </Link>
      ))}
    </StyledContainer>
  );
};

export default FeedListItem;

const StyledContainer = styled.div`
  margin: 2rem;
`;

const StyledGroup = styled.h4`
  margin: 1.5rem 0;
  color: ${({ theme }) => theme.colors.primary["400"]};
`;

const StyledEvent = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary["800"]};
  padding: 1rem;
  cursor: pointer;
`;

const StyledTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSize["xl"]};
`;

const StyledHosted = styled.p`
  color: ${({ theme }) => theme.colors.primary["300"]};
  margin: 1rem 0;
`;
