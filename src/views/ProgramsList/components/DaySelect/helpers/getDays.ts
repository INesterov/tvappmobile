import {
  startOfWeek,
  addDays,
  format,
  getUnixTime,
  subDays,
  startOfDay,
} from 'date-fns';

type Day = {
  value: string;
  title: string;
  date: Date;
};

export const getDays = (): Day[] => {
  const today = startOfDay(new Date());
  const prevDay = subDays(today, 1);
  const dayNumber = today.getDay();
  const startWeek = startOfWeek(dayNumber === 0 ? prevDay : today);
  const days = [];

  for (let i = 0; i <= 6; i++) {
    const day = addDays(startWeek, i);
    const title = format(addDays(day, 1), 'EEE');
    const date = addDays(day, 1);
    const value = String(getUnixTime(date));

    days.push({
      value,
      title,
      date,
    });
  }

  return days;
};
