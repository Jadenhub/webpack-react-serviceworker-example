import React from 'react';
import { HeaderRootWrapper, HeaderWrapper } from '../style/HeaderWrapper';
import styled from 'styled-components';
import { withI18n } from '../decorator/i18n';

const TitleWrapper = styled.div`
  font-size: 30px;
`

function Header({i18n}){
  return (
    <HeaderRootWrapper>
      <HeaderWrapper>
          <TitleWrapper>
            {i18n["RATES_LIST"]}
          </TitleWrapper>
      </HeaderWrapper>
    </HeaderRootWrapper>
  )
}

export default withI18n(Header)