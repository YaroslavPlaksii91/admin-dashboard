export type ContactType = {
  id: number;
  name: string;
  email: string;
  address: string;
  image: string;
  created: string;
};

export type ContactItemProps = {
  contact: ContactType;
};
