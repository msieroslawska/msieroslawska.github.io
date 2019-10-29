import React, { ReactElement } from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';

const Header = styled.header`
  height: 50px;
  background-color: yellow;
`;

const header = (): ReactElement => (
  <Header>
    <Link to="/">Main page</Link>
    <Link to="/about/">About</Link>
  </Header>
);

export default header;
