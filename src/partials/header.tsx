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
    <Link to="/topic-list/">Topics</Link>
    <Link to="/articles/">Articles</Link>
    <Link to="/projects/">Projects</Link>
    <Link to="/resources/">Resources</Link>
    <Link to="/codelogs/">Codelogs</Link>
  </Header>
);

export default header;
