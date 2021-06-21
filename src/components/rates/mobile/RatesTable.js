import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withI18n } from '../../decorator/i18n';
import Item from './Item';
import Button from '../../interact/Button';
import InfiniteScroll from '../../common/InfiniteScroll';
import DelayedUiWrapper from '../../style/DelayedUiWrapper';

const RATE_COUNT = 10;

const UlWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;
const LiWrapper = styled.li`
  margin-bottom:10px;
`;

const RatesTableWrapper = styled.div`
  margin: 20px 0 60px 0;
`

function getItem({rates, itemsClicked, setItemsClicked}){
  return rates.map((rate, idx) => {
    return (
      <LiWrapper key={idx} >
        <Item 
          clicked={itemsClicked[idx]}
          rate={rate} 
          onClick={()=>{
            itemsClicked = [...itemsClicked];
            itemsClicked[idx] = !itemsClicked[idx]
            setItemsClicked(itemsClicked)
          }}
        />
      </LiWrapper>
    )
  })
}

function onButtonClick({
  data,
  selectedAll,
  setItemsClicked,
  setSelectedAll
}){
  if (selectedAll) {
    setItemsClicked(Array(data.length).fill(false))
  } else {
    setItemsClicked(Array(data.length).fill(true))
  }
  setSelectedAll(!selectedAll)
}

function RatesTable({
  data = [],
  i18n
}){
  const [itemsClicked, setItemsClicked] = useState(Array(data.length).fill(false));
  const [selectedAll, setSelectedAll] = useState(false);
  const [ scrollableNode, setScrollableNode] = useState(null);
  const [offset, setOffset] = useState(RATE_COUNT);
  useEffect(()=>{
    setScrollableNode(window);
  }, [])
  return (
    <RatesTableWrapper>
      <Button onClick={()=>{
        onButtonClick({
          data,
          selectedAll,
          setItemsClicked,
          setSelectedAll
        })
      }}>
        {i18n["SELECT_ALL"]}
      </Button>
      <UlWrapper>
        <InfiniteScroll
          hasMore={data.length > offset}
          loader={<DelayedUiWrapper><div>...Loading</div></DelayedUiWrapper>}
          next={()=>{
            setOffset(offset + RATE_COUNT);
          }}
          scrollThreshold='80%'
          scrollableNode={scrollableNode}
        >
          {getItem({rates: data.slice(0, offset), itemsClicked, setItemsClicked})} 
        </InfiniteScroll>
      </UlWrapper>
    </RatesTableWrapper>
  )
}

export default withI18n(RatesTable)