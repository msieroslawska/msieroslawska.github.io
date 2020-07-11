import React from 'react';

import Base from './Base';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

interface Props {
  children;
  title: string;
}

const Page: React.FunctionComponent<Props> = ({ children, title }: Props) => (
  <Base title={title}>
    <Nav />
    {children}
    <Footer />
  </Base>
);

export default Page;
