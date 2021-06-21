import styled from 'styled-components';
import { withI18n } from "../../decorator/i18n";
import React from 'react';
import { HIGHLIGHT_COLOR, ITEM_DEFAULT_COLOR} from '../../../constants/style';

const RootWrapper = styled.div`
  border: 1px solid rgb(151, 151, 151);
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props)=> props.clicked? HIGHLIGHT_COLOR: ITEM_DEFAULT_COLOR};
  box-shadow: 1px 1px 4px 1px rgba(114, 114, 114, 0.5);
  cursor:pointer;
`
const ItemWrapper = styled.div`
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
`

function Item({
  rate, i18n, clicked, onClick
}){
  const {name, type, value, unit} = rate;
  return (
    <RootWrapper clicked={clicked} onClick={onClick}>
      <ItemWrapper>
        {i18n["NAME"]}:{name}
      </ItemWrapper>
      <ItemWrapper>
        {i18n["TYPE"]}:{type}
      </ItemWrapper>
      <ItemWrapper>
        {i18n["VALUE"]}:{value}
      </ItemWrapper>
      <ItemWrapper>
        {i18n["UNIT"]}:{unit}
      </ItemWrapper>
    </RootWrapper>
  )
}

export default withI18n(Item)