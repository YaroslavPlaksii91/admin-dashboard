export const FORGOT_PASSWORD_FIELDS = Object.freeze({
  EMAIL: 'email',
});

export const FORGOT_PASSWORD_FIELDS_CONFIG = Object.freeze({
  [FORGOT_PASSWORD_FIELDS.EMAIL]: {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'Email address',
  },
});

export const FORGOT_PASSWORD_FORM_TEST_ID = 'forgotPasswordForm';
