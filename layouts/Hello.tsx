import React from 'react';

import Base from './Base';
import Sidebar from '../components/Sidebar';

interface Props {
  children;
  title: string;
}

const Page: React.FunctionComponent<Props> = ({ children, title }: Props) => (
  <Base title={title}>
    <Sidebar />
    <main className="hello-section">{children}</main>
  </Base>
);

export default Page;
