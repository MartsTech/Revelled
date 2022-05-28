import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStore } from "stores/store";
import InfiniteScroll from "react-infinite-scroller";
import { PagingParams } from "types/pagination";
import FeedListItem from "./FeedListItem";
import styled from "styled-components";

const FeedList = () => {
  const { groupedEvents, pagination, setPagingParams, loadEvents } =
    useStore().eventStore;
  const [loadingNext, setLoadingNext] = useState(false);

  const handleGetNext = () => {
    setLoadingNext(true);
    setPagingParams(new PagingParams(pagination!.currentPage + 1));
    loadEvents(true).then(() => setLoadingNext(false));
  };

  return (
    <StyledContainer>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleGetNext}
        hasMore={
          !loadingNext &&
          !!pagination &&
          pagination.currentPage < pagination.totalPages
        }
        initialLoad={false}
      >
        {groupedEvents.map(([group, events]) => (
          <FeedListItem key={group} group={group} events={events} />
        ))}
      </InfiniteScroll>
    </StyledContainer>
  );
};

export default observer(FeedList);

const StyledContainer = styled.div`
  flex: 1;
`;
