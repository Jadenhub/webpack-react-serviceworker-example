import React from 'react';
import styled from "styled-components"
import { SIDE_WIDTH } from '../constants/style';
import RatesList from '../components/rates/RatesList'

const RootWrapper = styled.section`
   margin: 0 ${SIDE_WIDTH} 0 ${SIDE_WIDTH};
   overflow: hidden;
`
const RatesListWrapper = styled.div`
  margin-top: 20px;
`

function Home({
  isMobile
}){
  return (
    <RootWrapper>
      <RatesListWrapper>
        <RatesList isMobile={isMobile}/>
      </RatesListWrapper>
    </RootWrapper>
  )
}

export default Home