import React, { ReactElement } from 'react';
import Link from 'next/link';
import { Url } from '../interfaces';

interface Props {
  content: Url[];
  visible: boolean;
}

const DefaultCrumb: React.FC = () => <p>No crumbs provided!</p>;

const createCrumbsList = (crumbs: Url[]): ReactElement[] =>
  crumbs.map((crumb) => (
    <Link href={crumb.href}>
      <a>{crumb.name}</a>
    </Link>
  ));

const Crumbs: React.FC<Props> = ({ content, visible }: Props) => {
  const className = visible ? 'crumbs visible' : 'crumbs';
  const crumb = createCrumbsList(content) || <DefaultCrumb />;

  return <section className={className}>{crumb}</section>;
};

export default Crumbs;
