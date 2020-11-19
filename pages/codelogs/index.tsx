import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import PageLayout from '../../layouts/Page';

import { getCodelogs } from '../../utils/fileUtils';
import { Codelog, MappedCodelogs } from '../../types/codelogs';

interface Props {
  codelogs: Codelog[];
}

const filterCodelogsByPeriod = (codelogs: Codelog[], year: string, month: string): Codelog[] =>
  codelogs.filter((codelog) => codelog.slug.month === month && codelog.slug.year === year);

const mapCodelogsToMonths = (codelogs: Codelog[], year: string): MappedCodelogs =>
  moment.months().reduce((prev, curr, idx) => {
    const stringMonth = (idx + 1).toString();
    const m = stringMonth.length === 1 ? `0${stringMonth}` : stringMonth;

    return {
      ...prev,
      [curr]: filterCodelogsByPeriod(codelogs, year, m),
    };
  }, {});

const renderCodelogs = (filteredCodelogs: MappedCodelogs) =>
  Object.keys(filteredCodelogs).map(
    (month) =>
      filteredCodelogs[month].length > 0 && (
        <div key={month}>
          <p>{month}</p>
          <ul className="wrapped-list">
            {filteredCodelogs[month].map((codelog) => (
              <li key={codelog.title} className="wrapped-element">
                <Link href={`/codelogs/${codelog.slug.year}-${codelog.slug.month}-${codelog.slug.day}`}>
                  <a>{codelog.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ),
  );

const CodelogList: React.FC<Props> = ({ codelogs = [] }) => (
  <PageLayout header="All codelogs" title="All codelogs | Marta Sierosławska">
    <p>
      Codelogs were my way of taking notes while learning new stuff during my transitioning from QA to full time dev. I
      was mostly using <a href="https://frontendmasters.com">Frontend Masters</a> courses and a bit of{' '}
      <a href="https://hackerrank.com">Hackerrank</a>. Each day I was studying, I was taking notes following the pattern
      of:
    </p>

    <ul>
      <li>What are my plans for today?</li>
      <li>What did I learn today?</li>
      <li>What resources did I use?</li>
      <li>What other resources did I stumble upon?</li>
    </ul>

    <h2 className="page-subheader">Archive</h2>
    <h3 className="section-header">2019</h3>
    {renderCodelogs(mapCodelogsToMonths(codelogs, '2019'))}
  </PageLayout>
);

export const getStaticProps: GetStaticProps = async () => {
  const codelogs: Codelog[] = getCodelogs();

  return {
    props: { codelogs },
  };
};

export default CodelogList;
