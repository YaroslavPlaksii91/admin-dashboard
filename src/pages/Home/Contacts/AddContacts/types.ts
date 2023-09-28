export type AddContactsData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  photo: Blob[];
};

export type AddContactsProps = {
  addContact: (data: AddContactsData) => void;
};
