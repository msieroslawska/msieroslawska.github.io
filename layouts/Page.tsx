import React from 'react';

import Base from './Base';
import Crumbs from '../components/Crumbs';
import Sidebar from '../components/Sidebar';
import { Url } from '../interfaces';

interface Props {
  children: any;
  crumbs: Url[];
  header: string;
  title: string;
}

const Page: React.FC<Props> = ({ children, crumbs, header, title }: Props) => {
  const [crumbsVisible, setCrumbsVisibility] = React.useState(false);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    setCrumbsVisibility(e.currentTarget.scrollTop > 100);
  };

  return (
    <Base title={title}>
      <Sidebar />
      <main className="page-section" onScroll={handleScroll}>
        <Crumbs visible={crumbsVisible} content={crumbs} />
        <h1 className="page-header">{header}</h1>
        {children}
      </main>
    </Base>
  );
};

export default Page;
