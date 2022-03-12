import {startOfWeek, addDays, format} from 'date-fns';

type Day = {
  value: number;
  title: string;
  date: Date;
};

export const getDays = (): Day[] => {
  const today = new Date();
  const startWeek = addDays(startOfWeek(today), 1);
  const days = [];

  for (let i = 0; i <= 6; i++) {
    const day = addDays(startWeek, i);
    const title = format(day, 'EEE');

    days.push({
      value: i,
      title,
      date: day,
    });
  }

  return days;
};
