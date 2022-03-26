import React from 'react';
import {View} from 'react-native';
import {format, fromUnixTime, getUnixTime} from 'date-fns';
import {useSelector, useDispatch} from 'react-redux';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {RootState} from '../../../../../../store';
import {setDay} from '../../../../../../store/filters/filtersSlice';
import {TimeValue, StyledButton, ButtonTitle} from './styled';

export const TimeTab = (): JSX.Element => {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state: RootState) => state.filters.day);
  const selectedTime = fromUnixTime(Number(selectedDay));
  const [isShownTime, setShownTime] = React.useState(false);

  const handleChange = React.useCallback(
    (event: DateTimePickerEvent, selectedDate?: Date) => {
      setShownTime(false);

      if (!selectedDate) {
        return;
      }

      const time = String(getUnixTime(selectedDate));

      dispatch(setDay(time));
    },
    [dispatch],
  );

  return (
    <View>
      <TimeValue>{format(selectedTime, 'смотреть с HH:mm')}</TimeValue>
      <StyledButton>
        <ButtonTitle onPress={() => setShownTime(true)}>
          Выбрать время
        </ButtonTitle>
      </StyledButton>
      {isShownTime && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          is24Hour={true}
          onChange={handleChange}
        />
      )}
    </View>
  );
};
