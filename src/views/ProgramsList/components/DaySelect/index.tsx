import React from 'react';
import {format} from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import {useSelector, useDispatch} from 'react-redux';
import {getDays} from './helpers/getDays';
import {RootState} from '../../../../store';
import {setDay} from '../../../../store/filters/filtersSlice';
import {DayTitle, DayValue, DayWrap} from './styled';

export const DaySelect = (): JSX.Element => {
  const days = getDays();
  const dispatch = useDispatch();
  const selectedDay = useSelector((state: RootState) => state.filters.day);
  console.log('selectedDay', selectedDay);
  return (
    <>
      {days.map(day => (
        <DayWrap key={day.value} onTouchEnd={() => dispatch(setDay(day.value))}>
          <DayValue isActive={day.value === selectedDay}>
            {format(day.date, 'd', {locale: ruLocale})}
          </DayValue>
          <DayTitle isActive={day.value === selectedDay}>{day.title}</DayTitle>
        </DayWrap>
      ))}
    </>
  );
};
