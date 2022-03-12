import React from 'react';
import {format} from 'date-fns';
import {getDays} from './helpers/getDays';
import {DayTitle, DayValue, DayWrap} from './styled';

export const DaySelect = (): JSX.Element => {
  const days = getDays();
  const [selectedDay, selectDay] = React.useState<number | null>(null);

  return (
    <>
      {days.map(day => (
        <DayWrap key={day.value} onTouchEnd={() => selectDay(day.value)}>
          <DayValue isActive={day.value === selectedDay}>
            {format(day.date, 'd')}
          </DayValue>
          <DayTitle isActive={day.value === selectedDay}>{day.title}</DayTitle>
        </DayWrap>
      ))}
    </>
  );
};
