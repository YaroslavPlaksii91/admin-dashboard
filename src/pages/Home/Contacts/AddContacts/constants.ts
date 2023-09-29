import { IMAGE_SIZE } from '@components/AddPhoto/constants';

export const ADD_CONTACT_FIELDS = Object.freeze({
  PHOTO: 'photo',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  EMAIL: 'email',
  ADDRESS: 'address',
});

export const ADD_CONTACT_CONFIG = Object.freeze({
  [ADD_CONTACT_FIELDS.PHOTO]: {
    label: 'Add photo',
    name: 'photo',
    size: IMAGE_SIZE.BIG,
  },
  [ADD_CONTACT_FIELDS.FIRST_NAME]: {
    label: 'first name',
    type: 'text',
    name: 'firstName',
    placeholder: 'First name',
  },
  [ADD_CONTACT_FIELDS.LAST_NAME]: {
    label: 'last name',
    type: 'text',
    name: 'lastName',
    placeholder: 'Last name',
  },
  [ADD_CONTACT_FIELDS.EMAIL]: {
    label: 'email',
    type: 'email',
    name: 'email',
    placeholder: 'Email',
  },
  [ADD_CONTACT_FIELDS.ADDRESS]: {
    label: 'address',
    type: 'text',
    name: 'address',
    placeholder: 'Address',
  },
});
