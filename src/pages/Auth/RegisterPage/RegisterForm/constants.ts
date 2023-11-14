export const REGISTER_FIELDS = Object.freeze({
  EMAIL: 'email',
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
});

export const REGISTER_FIELDS_CONFIG = Object.freeze({
  [REGISTER_FIELDS.EMAIL]: {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'Email address',
  },
  [REGISTER_FIELDS.FIRST_NAME]: {
    label: 'first name',
    type: 'text',
    name: 'firstName',
    placeholder: 'First name',
  },
  [REGISTER_FIELDS.LAST_NAME]: {
    label: 'last name',
    type: 'text',
    name: 'lastName',
    placeholder: 'Last name',
  },
  [REGISTER_FIELDS.PASSWORD]: {
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    isPassword: true,
  },
  [REGISTER_FIELDS.CONFIRM_PASSWORD]: {
    label: 'confirm password',
    type: 'password',
    name: 'confirmPassword',
    placeholder: 'Password',
    isPassword: true,
  },
});

export const REGISTER_FORM_TEST_ID = 'registerForm';
