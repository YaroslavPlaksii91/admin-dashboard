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
};
