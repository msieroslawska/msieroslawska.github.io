import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Footer from '../partials/footer';
import Header from '../partials/header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  html {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  margin: 50px;
`;

const mainLayout = ({ children }: { children: ReactElement[] | ReactElement }): ReactElement => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  </>
);

export default mainLayout;
