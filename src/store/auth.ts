import { makeAutoObservable } from 'mobx';
import { User } from 'firebase/auth';

import { isLoggedIn, getUser } from '@services/localeStorage/localeStorage';

class AuthStore {
  isLoggedIn = isLoggedIn();
  user: User | null = getUser();

  constructor() {
    makeAutoObservable(this);
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    this.user = null;
  }

  setUser(user: User | null) {
    this.user = user;
  }
}

export const authStore = new AuthStore();
