import { useLocalObservable } from 'mobx-react-lite';
import { User } from 'firebase/auth';

export const useAuthStore = () => {
  const store = useLocalObservable(() => ({
    isLoggedIn: false,
    user: null as User | null,

    login() {
      store.isLoggedIn = true;
    },

    logout() {
      store.isLoggedIn = false;
      store.user = null;
    },

    setUser(user: User) {
      store.user = user;
    },
  }));

  return store;
};
