import { TicketType } from '@layout/Tickets/components/TicketsItem/types';

import data from './data.json';

export const getTickets = () =>
  new Promise<TicketType[]>(resolve => resolve(data.tickets));
