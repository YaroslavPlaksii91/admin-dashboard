import { FC, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { ROUTES } from '@routes/constants';
import { PublicRoute } from '@routes/PublicRoute';
import { ProtectedRoute } from '@routes/ProtectedRoute';
import { Overview } from '@layout/Overview/Overview';
import { Contacts } from '@layout/Contacts/Contacts';
import { Tickets } from '@layout/Tickets/Tickets';

import { theme } from '@styles/theme';

const loadHomePage = () => import('@pages/HomePage/HomePage');
const loadRegisterPage = () => import('@pages/RegisterPage/RegisterPage');
const loadLoginPage = () => import('@pages/LoginPage/LoginPage');
const loadForgotPasswordPage = () =>
  import('@pages/ForgotPasswordPage/ForgotPasswordPage');
const loadResetPasswordPage = () =>
  import('@pages/ResetPasswordPage/ResetPasswordPage');

const HomePage = lazy(() =>
  loadHomePage().then(module => ({ default: module.HomePage })),
);
const RegisterPage = lazy(() =>
  loadRegisterPage().then(module => ({ default: module.RegisterPage })),
);
const LoginPage = lazy(() =>
  loadLoginPage().then(module => ({ default: module.LoginPage })),
);
const ForgotPasswordPage = lazy(() =>
  loadForgotPasswordPage().then(module => ({
    default: module.ForgotPasswordPage,
  })),
);
const ResetPasswordPage = lazy(() =>
  loadResetPasswordPage().then(module => ({
    default: module.ResetPasswordPage,
  })),
);

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path={ROUTES.HOME_PAGE}
            element={
              <ProtectedRoute redirectPath={ROUTES.LOGIN_PAGE}>
                <HomePage />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={ROUTES.OVERVIEW} />} />
            <Route path={ROUTES.OVERVIEW} element={<Overview />} />
            <Route path={ROUTES.CONTACTS} element={<Contacts />} />
            <Route path={ROUTES.TICKETS} element={<Tickets />} />
          </Route>
          <Route
            path={ROUTES.REGISTER_PAGE}
            element={
              <PublicRoute redirectPath={ROUTES.HOME_PAGE}>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path={ROUTES.LOGIN_PAGE}
            element={
              <PublicRoute redirectPath={ROUTES.HOME_PAGE}>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path={ROUTES.FORGOT_PASSWORD_PAGE}
            element={
              <PublicRoute redirectPath={ROUTES.HOME_PAGE}>
                <ForgotPasswordPage />
              </PublicRoute>
            }
          />
          <Route
            path={ROUTES.RESET_PASSWORD_PAGE}
            element={
              <PublicRoute redirectPath={ROUTES.HOME_PAGE}>
                <ResetPasswordPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to={ROUTES.HOME_PAGE} />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
