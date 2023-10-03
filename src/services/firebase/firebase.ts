import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  confirmPasswordReset,
  getAuth,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDi2Tz4_08rci_ueySrxV74Qb0XwVjUv3c',
  authDomain: 'admin-dashboard-fe151.firebaseapp.com',
  projectId: 'admin-dashboard-fe151',
  storageBucket: 'admin-dashboard-fe151.appspot.com',
  messagingSenderId: '344566717061',
  appId: '1:344566717061:web:7ebb607d2d88ceca7527ec',
  measurementId: 'G-49PBLQE76Y',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const createUser = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const getCurrentUser = () => auth.currentUser;

export const sendResetEmail = async (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

export const confirmThePasswordReset = async (
  oobCode: string,
  newPassword: string,
) => {
  if (!oobCode && !newPassword) return;

  return confirmPasswordReset(auth, oobCode, newPassword);
};
