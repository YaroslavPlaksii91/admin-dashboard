import { MONTHS } from '@routes/constants';

export const formatCurrentDate = () => {
  const currentDate = new Date();
  const month = MONTHS[currentDate.getMonth()].slice(0, 3);
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  let hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  if (hour > 12) {
    hour -= 12;
  }

  return `${month} ${day}, ${year} ${hour}:${minute
    .toString()
    .padStart(2, '0')} ${ampm}`;
};
