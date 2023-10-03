import { LOCALE_STORAGE_TOKEN_KEY } from '@utils/constants';

export const startSession = (token: string) => {
  localStorage.setItem(LOCALE_STORAGE_TOKEN_KEY, token);
};

export const endSession = () => {
  localStorage.removeItem(LOCALE_STORAGE_TOKEN_KEY);
};

export const isLoggedIn = () => {
  const token = localStorage.getItem(LOCALE_STORAGE_TOKEN_KEY);

  return Boolean(token);
};
