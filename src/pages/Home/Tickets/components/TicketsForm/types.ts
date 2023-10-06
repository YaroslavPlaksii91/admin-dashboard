import { TicketType } from '../TicketsItem/types';

export type TicketsFormData = {
  title: string;
  name: string;
  date: {
    $d: string;
  };
  priority: string;
};

export type TicketsFormProps = {
  addTicket: (data: TicketsFormData) => void;
  editTicket: (data: TicketsFormData) => void;
  activeTicket?: TicketType;
};
