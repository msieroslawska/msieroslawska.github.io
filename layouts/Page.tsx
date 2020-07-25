import React from 'react';

import Base from './Base';
import Crumbs from '../components/Crumbs';
import Sidebar from '../components/Sidebar';

interface Props {
  children: any;
  header: string;
  title: string;
}

const Page: React.FC<Props> = ({ children, header, title }: Props) => {
  const [crumbsVisible, setCrumbsVisibility] = React.useState(false);

  const handleScroll = (e) => {
    setCrumbsVisibility(e.target.scrollTop > 100);
  };

  return (
    <>
      <Base title={title}>
        <Sidebar />
        <main className="page-section" onScroll={handleScroll}>
          <Crumbs visible={crumbsVisible} />
          <h1 className="page-header">{header}</h1>
          {children}
        </main>
      </Base>
    </>
  );
};

export default Page;
