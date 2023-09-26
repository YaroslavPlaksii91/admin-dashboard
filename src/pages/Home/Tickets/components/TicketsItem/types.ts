export type TicketType = {
  id: number;
  title: string;
  customer: {
    name: string;
    date: string;
  };
  date: string;
  priority: string;
  image: string;
  updated: string;
};

export type TicketsItemProps = {
  ticket: TicketType;
};
