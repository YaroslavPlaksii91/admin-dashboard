export type AddTicketsData = {
  title: string;
  name: string;
  date: {
    $d: string;
  };
  priority: string;
};

export type AddTicketsProps = {
  addTicket: (data: AddTicketsData) => void;
};
