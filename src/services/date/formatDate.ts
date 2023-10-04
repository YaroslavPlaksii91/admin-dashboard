import { MONTHS } from '@utils/constants';

export const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const month = MONTHS[date.getMonth()].slice(0, 3);
  const day = date.getDate();
  const year = date.getFullYear();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  if (hour > 12) {
    hour -= 12;
  }

  return {
    date: `${month} ${day}, ${year}`,
    time: `${hour}:${minute} ${ampm}`,
  };
};
