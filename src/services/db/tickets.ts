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

export const editTicket = async (ticketId: string, ticket: TicketType) => {
  try {
    await axiosInstance.patch(`/tickets/${ticketId}`, ticket);
  } catch (error) {
    console.error('Error while updating a ticket: ', error);
  }
};

export const deleteTicket = async (ticketId: string) => {
  try {
    await axiosInstance.delete(`/tickets/${ticketId}`);
  } catch (error) {
    console.error('Error while removing a ticket: ', error);
  }
};
