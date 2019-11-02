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

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  animation: ${keyFrameExampleOne} 2s ease-in-out 2s 1;
  animation-fill-mode: forwards;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Hello = styled.h1`
  color: ${theme.palette.primary.main}
  margin: 0;
`;

const Tagline = styled.h2`
  color: ${theme.palette.secondary.main}
`;

const Description = styled.h3`
  color: ${theme.palette.error.main}
`;

// position: absolute;
// left: 50%;
// top: 50%;
// transform: translate(-50%, -50%);

const descriptionText = 'This page is a playground and a notebook for my experiments. I would like to document here my programming progress and write down all the notes I might need later.';

const EntryPage = (): ReactElement => (
  <Wrapper>
    <Hello>Hi, I&apos;m Marta!</Hello>
    <Tagline>Software engineer</Tagline>
    <Description>{descriptionText}</Description>
  </Wrapper>
);

export default EntryPage;
