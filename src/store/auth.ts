import { makeAutoObservable } from 'mobx';
import { User } from 'firebase/auth';

class AuthStore {
  isLoggedIn = false;
  user: User | null = null;

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
