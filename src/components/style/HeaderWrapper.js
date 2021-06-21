import styled from 'styled-components';
import { HEADER_BG_COLOR, HEADER_HEIGHT } from '../../constants/style';

export const HeaderRootWrapper = styled.header`
  background-color: ${HEADER_BG_COLOR};
  display: flex;
  width: inherit;
  position: fixed;
  top:0;
  z-index: 200;
`

export const HeaderWrapper = styled.div`
 height: ${HEADER_HEIGHT}px;
 display: flex;
 align-items: center;
 padding-right: 24px;
 padding-left: 60px;
 width: 100%;
`