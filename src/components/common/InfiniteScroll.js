import React from 'react';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

export default function InfiniteScroll({
  hasMore,
  next,
  scrollableNode,
  scrollThreshold,
  loader,
  ...props
}){
  const { children } = props;
  const {isFetching} =  useInfiniteScroll({
    hasMore,
    next,
    scrollThreshold,
    scrollableNode,
  });
  return (
    <> 
      { children }
      {isFetching? loader: null}
    </>
  );
}