import React from 'react';
import styled, { keyframes } from "styled-components";

const makeVisible = keyframes`
  to {
    visibility: visible;
  }
`;

const Wrapper = styled.div`
  animation: ${props => `0s linear ${props.delay}s forwards`} ${makeVisible};
  visibility: hidden;
  display: ${(props) => props.inline ? 'inline-block' : 'block'};
`

const DelayedUiWrapper = ({ children, delay = 0.5, inline = false }) => (
  <Wrapper delay={delay} inline={inline}>{children}</Wrapper>
)

export default DelayedUiWrapper
