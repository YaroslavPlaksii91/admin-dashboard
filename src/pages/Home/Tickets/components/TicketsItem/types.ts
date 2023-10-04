export type TicketType = {
  id: string;
  title: string;
  customerName: string;
  customerDate: string;
  date: string;
  priority: string;
  image: string;
  updated: string;
};

export type TicketsItemProps = {
  ticket: TicketType;
};
