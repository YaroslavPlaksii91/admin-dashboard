import { makeAutoObservable } from 'mobx';

class AuthStore {
  isLoggedIn = false;
  user: null;

  constructor() {
    makeAutoObservable(this);
  }

  login() {
    this.isLoggedIn = true;
    console.log('AuthStore', this.isLoggedIn)
  }

  logout() {
    this.isLoggedIn = false;
    this.user = null;
  }

  setUser(user) {
    this.user = user;
  }
}

export const authStore = new AuthStore();
