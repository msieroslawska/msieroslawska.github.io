'use client';
import Link from 'next/link';
import { DayPicker } from 'react-day-picker';

import type { CodelogEntry } from '@types';
import type { DayProps } from 'react-day-picker';

interface CalendarProps {
  codelogs: CodelogEntry[];
  selectedDate?: Date;
}

const BaseTableCell = ({ children }: { children?: React.ReactNode }) => (
  <td className="text-center w-1/7 p-2">{children}</td>
);

export const Calendar = ({ codelogs, selectedDate }: CalendarProps) => {
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

  const codelogDates = codelogs.map((cl) => new Date(cl.fields.date));

  return (
    <DayPicker
      components={{ Day: CustomDay }}
      defaultMonth={codelogDates[0] || new Date()}
      endMonth={codelogDates[0] || new Date()}
      mode="single"
      startMonth={codelogDates[codelogDates.length - 1] || new Date()}
    />
  );
};
