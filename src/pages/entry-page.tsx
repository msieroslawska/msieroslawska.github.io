import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

import theme from '../layouts/themes/main-theme';

const keyFrameExampleOne = keyframes`
  0% {
    height: 100vh;
    visibility: visible;
    opacity: 1;
  }
  100% {
    height: 0;
    visibility: hidden;
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  animation: ${keyFrameExampleOne} 2s ease-in-out 2s 1;
  animation-fill-mode: forwards;
`;

const Header = styled.h1`
  color: ${theme.palette.error.main}
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`;

const EntryPage = (): ReactElement => (
  <Wrapper>
    <Header>HI!</Header>
  </Wrapper>
);

export default EntryPage;
