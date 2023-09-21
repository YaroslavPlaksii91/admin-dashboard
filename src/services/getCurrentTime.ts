import { MONTHS } from '@routes/constants';

export const getCurrentTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = MONTHS[now.getMonth()].slice(0, 3);
  const day = now.getDate();
  const hours = now.getHours() % 12 || 12;
  const amOrPm = now.getHours() >= 12 ? 'PM' : 'AM';
  const minutes = now.getMinutes();

  const currentTime = `as of ${day} ${month} ${year}, ${
    hours < 10 ? `0${hours}` : hours
  }:${minutes < 10 ? `0${minutes}` : minutes} ${amOrPm}`;

  return currentTime;
};
