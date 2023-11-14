export const RESET_PASSWORD_FIELDS = Object.freeze({
  PASSWORD: 'password',
  CONFIRM_PASSWORD: 'confirmPassword',
});

export const RESET_PASSWORD_FIELDS_CONFIG = Object.freeze({
  [RESET_PASSWORD_FIELDS.PASSWORD]: {
    label: 'new password',
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    isPassword: true,
  },
  [RESET_PASSWORD_FIELDS.CONFIRM_PASSWORD]: {
    label: 'confirm new password',
    type: 'password',
    name: 'confirmPassword',
    placeholder: 'Password',
    isPassword: true,
  },
});

export const RESET_PASSWORD_FORM_TEST_ID = 'resetPasswordForm';
