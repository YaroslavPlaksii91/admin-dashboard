export const LOGIN_FIELDS = Object.freeze({
  EMAIL: 'email',
  PASSWORD: 'password',
});

export const LOGIN_FIELDS_CONFIG = Object.freeze({
  [LOGIN_FIELDS.EMAIL]: {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'Email address',
  },
  [LOGIN_FIELDS.PASSWORD]: {
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    isPassword: true,
  },
});
