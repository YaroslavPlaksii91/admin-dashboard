import { MouseEventHandler } from 'react';

export type ContactType = {
  id: string;
  name: string;
  email: string;
  address: string;
  image: string;
  date: string;
};

export type ContactItemProps = {
  contact: ContactType;
  handleDelete: MouseEventHandler<HTMLDivElement>;
  handleEdit: MouseEventHandler<HTMLDivElement>;
};
