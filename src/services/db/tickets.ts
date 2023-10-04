import axios from 'axios';

import { TicketType } from '@pages/Home/Tickets/components/TicketsItem/types';

export const getTickets = async () => {
  try {
    const { data } = await axios<TicketType[]>(
      'https://651bfe75194f77f2a5af33c3.mockapi.io/api/tickets',
    );

    return data;
  } catch (error) {
    console.error('Error while fetching data: ', error);
  }
};

export const createTicket = async (newTicket: TicketType) => {
  try {
    const { data } = await axios.post(
      'https://651bfe75194f77f2a5af33c3.mockapi.io/api/tickets',
      newTicket,
    );

    return data;
  } catch (error) {
    console.error('Error while creating a new ticket: ', error);
  }
};
