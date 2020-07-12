import React from 'react';

import Base from './Base';
import Sidebar from '../components/Sidebar';

interface Props {
  children: any;
  header: string;
  title: string;
}

const Page: React.FunctionComponent<Props> = ({ children, header, title }: Props) => (
  <Base title={title}>
    <Sidebar />
    <main className="page-section">
      <h1 className="page-header">{header}</h1>
      {children}
    </main>
  </Base>
);

export default Page;
