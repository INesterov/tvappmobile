import React from 'react';
import {format} from 'date-fns';
import {useSelector, useDispatch} from 'react-redux';
import {getDays} from './helpers/getDays';
import {RootState} from '../../../../store';
import {setDay} from '../../../../store/filters/filtersSlice';
import {DayTitle, DayValue, DayWrap} from './styled';

export const DaySelect = (): JSX.Element => {
  const days = getDays();
  const dispatch = useDispatch();
  const selectedDay = useSelector((state: RootState) => state.filters.day);

  return (
    <>
      {days.map(day => (
        <DayWrap key={day.value} onTouchEnd={() => dispatch(setDay(day.value))}>
          <DayValue isActive={day.value === selectedDay}>
            {format(day.date, 'd')}
          </DayValue>
          <DayTitle isActive={day.value === selectedDay}>{day.title}</DayTitle>
        </DayWrap>
      ))}
    </>
  );
};
