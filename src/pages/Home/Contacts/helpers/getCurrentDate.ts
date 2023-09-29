import { formatCurrentDate } from '@services/date/formatCurrentDate';

export const currentDate = formatCurrentDate().split(' ').slice(0, 3).join(' ');
