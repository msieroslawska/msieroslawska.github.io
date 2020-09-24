import React from 'react';

import Base from './Base';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

interface Props {
  title: string;
}

const Page: React.FC<Props> = ({ children, title }) => (
  <Base title={title}>
    <Nav />
    <main className="hello-section">
      {children}
      <Footer />
    </main>
  </Base>
);

export default Page;
