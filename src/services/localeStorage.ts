import { RegisterFormData } from '@pages/RegisterPage/RegisterForm/types';
import { LOCALE_STORAGE_KEY } from '@utils/constants';

export const getUser = (data: { email: string; password?: string }) => {
  try {
    const storedUsers = JSON.parse(
      localStorage.getItem(LOCALE_STORAGE_KEY) || '[]',
    );

    const user = storedUsers.find(
      (u: RegisterFormData) => u.email === data.email,
    );

    return user;
  } catch (error) {
    console.error('Error getting user:', error);
  }
};

export const addUser = (data: RegisterFormData) => {
  try {
    const storedUsers = JSON.parse(
      localStorage.getItem(LOCALE_STORAGE_KEY) || '[]',
    );

    const user = getUser(data);

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

    const updatedUsers = storedUsers.map((user: RegisterFormData) => {
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
