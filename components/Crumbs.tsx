import React, { ReactElement } from 'react';
import Link from 'next/link';
import { Url } from '../types/codelogs';

interface Props {
  content: Url[];
}

const DefaultCrumb: React.FC = () => <p>No crumbs provided!</p>;

const createCrumbsList = (crumbs: Url[]): ReactElement[] =>
  crumbs.map((crumb) => (
    <Link href={crumb.href} key={crumb.name}>
      <a className="crumb-link">{crumb.name}</a>
    </Link>
  ));

const renderCrumb = (crumbs: Url[]) => (crumbs.length > 0 ? createCrumbsList(crumbs) : <DefaultCrumb />);

const Crumbs: React.FC<Props> = ({ content }) => <section className="crumbs">{renderCrumb(content)}</section>;

export default Crumbs;
