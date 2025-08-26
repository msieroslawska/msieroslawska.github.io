'use client';
import Link from 'next/link';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';

import type { CodelogEntry } from '@types';
import type { ChevronProps, DayProps } from 'react-day-picker';

interface CalendarProps {
  codelogs: CodelogEntry[];
  selectedDate?: Date;
}

const BaseTableCell = ({ children }: { children?: React.ReactNode }) => (
  <td className="text-center w-1/7 p-2">{children}</td>
);

export const Calendar = ({ codelogs, selectedDate }: CalendarProps) => {
  const codelogDates = codelogs.map((cl) => new Date(cl.fields.date));
  const startMonth = codelogDates[codelogDates.length - 1];
  const endMonth = codelogDates[0];

  const [displayedMonth, setDisplayedMonth] = useState(selectedDate || endMonth || new Date());

  const CustomChevron = (props: ChevronProps & { disabled?: boolean }) => {
    const { size = 24, orientation = 'left', className, disabled } = props;

    const isDisabled =
      disabled ||
      (orientation === 'left' && displayedMonth <= startMonth) ||
      (orientation === 'right' && displayedMonth >= endMonth);

    return (
      <svg
        className={`${className} ${isDisabled ? 'text-gray-800' : 'text-primary'}`}
        fill="currentColor"
        width={size}
        height={size}
        viewBox="0 0 24 24"
      >
        {orientation === 'up' && <polygon points="6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" />}
        {orientation === 'down' && <polygon points="6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" />}
        {orientation === 'left' && (
          <polygon points="16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" />
        )}
        {orientation === 'right' && (
          <polygon points="8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" />
        )}
      </svg>
    );
  };

  const CustomDay = ({ day }: DayProps) => {
    if (day.outside) {
      return <BaseTableCell />;
    }

    const codelog = codelogs.find((cl) => new Date(cl.fields.date).toDateString() === day.date.toDateString());

    const isSelected = selectedDate && day.date.toDateString() === selectedDate.toDateString();

    if (codelog) {
      return (
        <BaseTableCell>
          <Link
            href={`/codelogs/${codelog.fields.title}`}
            className={`font-bold no-underline rounded-full border-2 border-primary w-8 h-8 flex items-center justify-center hover:underline hover:text-secondary ${
              isSelected ? 'bg-primary text-primary-content' : ''
            }`}
          >
            {day.date.getDate()}
          </Link>
        </BaseTableCell>
      );
    }

    return <BaseTableCell>{day.date.getDate()}</BaseTableCell>;
  };

  return (
    <DayPicker
      components={{ Chevron: CustomChevron, Day: CustomDay }}
      endMonth={endMonth}
      navLayout="around"
      mode="single"
      month={displayedMonth}
      onMonthChange={setDisplayedMonth}
      startMonth={startMonth}
      weekStartsOn={1}
    />
  );
};
