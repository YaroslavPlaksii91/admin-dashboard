import { ContactType } from '@pages/Home/Contacts/components/ContactsItem/types';

import data from './data.json';

export const getContacts = () =>
  new Promise<ContactType[]>(resolve => resolve(data.contacts));
