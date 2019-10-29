import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  height: 50px;
  background-color: red;
  display: flex;
  flex-direction: row;
`;

const footer = (): ReactElement => (
  <Footer>
    <p>© Marta Sierosławska</p>
    <p>
      Brought to you by <a href="https://www.gatsbyjs.org/">Gatsby</a>
    </p>
  </Footer>
);

export default footer;
