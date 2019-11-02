import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../layouts/themes/main-theme';
import EntryPage from './entry-page';
import MainPage from './main-page';

const MainWrapper = styled.div`
  overflow: hidden;
`;

const Index = (): ReactElement => (
  <>
    <Helmet>
      {/* <link rel="stylesheet" type="text/css" href="./styles/custom.css" /> */}
    </Helmet>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainWrapper>
        <EntryPage />
        <MainPage />
      </MainWrapper>
    </ThemeProvider>
  </>
);

export default Index;
