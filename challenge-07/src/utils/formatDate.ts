import { zonedTimeToUtc } from 'date-fns-tz';
import { getDate, getMonth, getYear } from 'date-fns';

const formatDate = (date: Date): string => {
  const utcDate = zonedTimeToUtc(date, 'America/Fortaleza');

  const day = getDate(utcDate);
  const month = getMonth(utcDate) + 1;
  const year = getYear(utcDate);

  let zeroDay = '';
  let zeroMonth = '';

  if (day < 10) {
    zeroDay = '0';
  }

  if (month < 10) {
    zeroMonth = '0';
  }

  return `${zeroDay}${day}/${zeroMonth}${month}/${year}`;
};

export default formatDate;
