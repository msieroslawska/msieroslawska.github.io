import React from 'react';

import Base from './Base';
import Crumbs from '../components/Crumbs';
import Nav from '../components/Nav';
import { Url } from '../types';

interface Props {
  crumbs?: Url[];
  header: string;
  title: string;
}

const Page: React.FC<Props> = ({ children, crumbs = undefined, header, title }) => {
  return (
    <Base title={title}>
      <Nav />
      <main className="page-section">
        {crumbs && <Crumbs content={crumbs} />}
        <h1 className="page-header">{header}</h1>
        {children}
        {crumbs && <Crumbs content={crumbs} />}
      </main>
    </Base>
  );
};

export default Page;
