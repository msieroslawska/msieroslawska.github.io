'use client';
import Link from 'next/link';
import { DayPicker } from 'react-day-picker';

import type { CodelogEntry } from '@types';
import type { DayProps } from 'react-day-picker';

interface CalendarProps {
  codelogs: CodelogEntry[];
  selectedDate?: Date;
}

export const Calendar = ({ codelogs, selectedDate }: CalendarProps) => {
  const CustomDay = ({ day }: DayProps) => {
    if (day.outside) {
      return <td></td>;
    }

    const codelog = codelogs.find((cl) => new Date(cl.fields.date).toDateString() === day.date.toDateString());

    const isSelected = selectedDate && day.date.toDateString() === selectedDate.toDateString();

    if (codelog) {
      return (
        <td>
          <Link
            href={`/codelogs/${codelog.fields.title}`}
            className={`font-bold no-underline rounded-full border-2 border-primary w-8 h-8 flex items-center justify-center hover:underline hover:text-secondary ${
              isSelected ? 'bg-primary text-primary-content' : ''
            }`}
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
      defaultMonth={codelogDates[0] || new Date()}
      endMonth={codelogDates[0] || new Date()}
      mode="single"
      startMonth={codelogDates[codelogDates.length - 1] || new Date()}
    />
  );
};
