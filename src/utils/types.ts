import { User } from 'firebase/auth';

export type AuthStore = {
  isLoggedIn: boolean;
  user: User | null;
  login(): void;
  logout(): void;
  setUser(user: User): void;
};

export type AppProps = {
  authStore: AuthStore;
};
