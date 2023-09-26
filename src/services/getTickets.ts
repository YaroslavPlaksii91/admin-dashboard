import { TicketType } from '@pages/Home/Tickets/components/TicketsItem/types';

import data from './data.json';

export const getTickets = () =>
  new Promise<TicketType[]>(resolve => resolve(data.tickets));
