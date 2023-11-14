import { FC, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';

import { ROUTES } from '@routes/constants';
import { PublicRoute } from '@routes/PublicRoute';
import { ProtectedRoute } from '@routes/ProtectedRoute';
import { LoginPage } from '@pages/Auth/LoginPage/LoginPage';
import { RegisterPage } from '@pages/Auth/RegisterPage/RegisterPage';
import { ForgotPasswordPage } from '@pages/Auth/ForgotPasswordPage/ForgotPasswordPage';
import { ResetPasswordPage } from '@pages/Auth/ResetPasswordPage/ResetPasswordPage';
import { Overview } from '@pages/Home/Overview/Overview';
import { Tickets } from '@pages/Home/Tickets/Tickets';
import { Contacts } from '@pages/Home/Contacts/Contacts';
import { AppProps } from '@utils/types';

import 'react-toastify/dist/ReactToastify.css';
import { theme } from '@styles/theme';

const loadAuthPage = () => import('@pages/Auth/Auth');
const loadHomePage = () => import('@pages/Home/HomePage');

const AuthPage = lazy(() =>
  loadAuthPage().then(module => ({ default: module.Auth })),
);
const HomePage = lazy(() =>
  loadHomePage().then(module => ({ default: module.HomePage })),
);

export const App: FC<AppProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path={ROUTES.AUTH}
            element={
              <PublicRoute redirectPath={ROUTES.HOME_PAGE}>
                <AuthPage />
              </PublicRoute>
            }
          >
            <Route index element={<Navigate to={ROUTES.LOGIN_PAGE} />} />
            <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER_PAGE} element={<RegisterPage />} />
            <Route
              path={ROUTES.FORGOT_PASSWORD_PAGE}
              element={<ForgotPasswordPage />}
            />
            <Route
              path={ROUTES.RESET_PASSWORD_PAGE}
              element={<ResetPasswordPage />}
            />
          </Route>

          <Route
            path={ROUTES.HOME_PAGE}
            element={
              <ProtectedRoute redirectPath={ROUTES.AUTH}>
                <HomePage />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={ROUTES.OVERVIEW} />} />
            <Route path={ROUTES.OVERVIEW} element={<Overview />} />
            <Route path={ROUTES.CONTACTS} element={<Contacts />} />
            <Route path={ROUTES.TICKETS} element={<Tickets />} />
          </Route>

          <Route path="*" element={<Navigate to={ROUTES.HOME_PAGE} />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
