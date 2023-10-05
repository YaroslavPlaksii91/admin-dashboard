import { axiosInstance } from '@services/axios/axiosInstance';
import { TicketType } from '@pages/Home/Tickets/components/TicketsItem/types';

export const getTickets = async () => {
  try {
    const { data } = await axiosInstance<TicketType[]>('/tickets');

    return data;
  } catch (error) {
    console.error('Error while fetching data: ', error);
  }
};

export const createTicket = async (newTicket: TicketType) => {
  try {
    const { data } = await axiosInstance.post('/tickets', newTicket);

    return data;
  } catch (error) {
    console.error('Error while creating a new ticket: ', error);
  }
};
