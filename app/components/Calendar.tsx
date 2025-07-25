'use client';
import Link from 'next/link';
import { DayPicker } from 'react-day-picker';

import type { CodelogEntry } from '@types';
import type { DayProps } from 'react-day-picker';

interface CalendarProps {
  codelogs: CodelogEntry[];
}

export const Calendar = ({ codelogs }: CalendarProps) => {
  const CustomDay = ({ day }: DayProps) => {
    if (day.outside) {
      return <td></td>;
    }

    const codelog = codelogs.find((cl) => new Date(cl.fields.date).toDateString() === day.date.toDateString());

    if (codelog) {
      return (
        <td className="">
          <Link
            href={`/codelogs/${codelog.fields.title}`}
            className="text-secondary font-bold no-underline rounded-full border-2 border-primary w-8 h-8 flex items-center justify-center hover:underline"
          >
            {day.date.getDate()}
          </Link>
        </td>
      );
    }

    return <td className="text-center">{day.date.getDate()}</td>;
  };

  const codelogDates = codelogs.map((cl) => new Date(cl.fields.date));

  return (
    <DayPicker
      components={{ Day: CustomDay }}
      // hideNavigation
      // captionLayout="dropdown-months"
      startMonth={codelogDates[codelogDates.length - 1] || new Date()}
      endMonth={codelogDates[0] || new Date()}
      defaultMonth={codelogDates[0] || new Date()}
      mode="single"
      modifiers={{
        hasCodelog: codelogDates,
      }}
      modifiersStyles={{
        hasCodelog: { backgroundColor: 'blue', fontWeight: 'bold' },
      }}
    />
  );
};
