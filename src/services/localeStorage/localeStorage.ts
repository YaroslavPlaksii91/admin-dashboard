import { User } from 'firebase/auth';
import {
  LOCALE_STORAGE_TOKEN_KEY,
  LOCALE_STORAGE_CURRENT_USER_KEY,
} from '@utils/constants';

export const startSession = (user: User) => {
  localStorage.setItem(LOCALE_STORAGE_TOKEN_KEY, user.refreshToken);
  localStorage.setItem(LOCALE_STORAGE_CURRENT_USER_KEY, JSON.stringify(user));
};

export const endSession = () => {
  localStorage.removeItem(LOCALE_STORAGE_TOKEN_KEY);
  localStorage.removeItem(LOCALE_STORAGE_CURRENT_USER_KEY);
};

export const isLoggedIn = () => {
  const token = localStorage.getItem(LOCALE_STORAGE_TOKEN_KEY);

  return Boolean(token);
};

export const getUser = () => {
  try {
    const user = JSON.parse(
      localStorage.getItem(LOCALE_STORAGE_CURRENT_USER_KEY) || 'null',
    );

    return user;
  } catch (error) {
    console.log(error);
  }
};
