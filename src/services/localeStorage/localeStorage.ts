import { LOCALE_STORAGE_KEY } from '@utils/constants';

import { UserStoreType } from '../types';

export const getUser = (email: string) => {
  try {
    const storedUsers = JSON.parse(
      localStorage.getItem(LOCALE_STORAGE_KEY) || '[]',
    );

    const user = storedUsers.find((u: UserStoreType) => u.email === email);

    return user;
  } catch (error) {
    console.error('Error getting user:', error);
  }
};

export const getCurrentUser = () => {
  try {
    const storedUsers = JSON.parse(
      localStorage.getItem(LOCALE_STORAGE_KEY) || '[]',
    );

    const user = storedUsers.find((u: UserStoreType) => u.isLoggedIn);

    return user;
  } catch (error) {
    console.error('Error getting current user:', error);
  }
};

export const addUser = (data: UserStoreType) => {
  try {
    const storedUsers = JSON.parse(
      localStorage.getItem(LOCALE_STORAGE_KEY) || '[]',
    );

    const user = getUser(data.email);

    user
      ? console.error('User already exists')
      : localStorage.setItem(
          LOCALE_STORAGE_KEY,
          JSON.stringify([...storedUsers, data]),
        );
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

export const changeUserPassword = (email: string, newPassword: string) => {
  try {
    const storedUsers = JSON.parse(
      localStorage.getItem(LOCALE_STORAGE_KEY) || '[]',
    );

    const updatedUsers = storedUsers.map((user: UserStoreType) => {
      if (user.email === email) {
        return { ...user, password: newPassword, confirmPassword: newPassword };
      }
      return user;
    });

    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(updatedUsers));
  } catch (error) {
    console.error('Error changing user password:', error);
  }
};

export const getIsLoggedIn = () => {
  try {
    const storedUsers = JSON.parse(
      localStorage.getItem(LOCALE_STORAGE_KEY) || '[]',
    );

    const isLoggedIn = storedUsers.some((u: UserStoreType) => u.isLoggedIn);

    return isLoggedIn;
  } catch (error) {
    console.error('Error getting user:', error);
  }
};

export const setIsLoggedIn = (email: string) => {
  try {
    const storedUsers = JSON.parse(
      localStorage.getItem(LOCALE_STORAGE_KEY) || '[]',
    );

    const updatedUsers = storedUsers.map((user: UserStoreType) => {
      if (user.email === email) {
        return { ...user, isLoggedIn: !user.isLoggedIn };
      }
      return user;
    });

    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(updatedUsers));
  } catch (error) {
    console.error('Error changing user status:', error);
  }
};
