import React, { ReactElement } from 'react';
import Link from 'next/link';
import { Url } from '../interfaces';

interface Props {
  content: Url[];
}

const DefaultCrumb: React.FC = () => <p>No crumbs provided!</p>;

const createCrumbsList = (crumbs: Url[]): ReactElement[] =>
  crumbs.map((crumb) => (
    <Link href={crumb.href}>
      <a className="crumb-link">{crumb.name}</a>
    </Link>
  ));

const Crumbs: React.FC<Props> = ({ content }) => {
  const crumb = createCrumbsList(content) || <DefaultCrumb />;

  return <section className="crumbs">{crumb}</section>;
};

export default Crumbs;
