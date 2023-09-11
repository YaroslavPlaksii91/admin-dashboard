import { FC, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { ROUTES } from '@routes/constants';

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
          <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
          <Route path={ROUTES.REGISTER_PAGE} element={<RegisterPage />} />
          <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
          <Route
            path={ROUTES.FORGOT_PASSWORD_PAGE}
            element={<ForgotPasswordPage />}
          />
          <Route
            path={ROUTES.RESET_PASSWORD_PAGE}
            element={<ResetPasswordPage />}
          />
          <Route path="*" element={<Navigate to={ROUTES.HOME_PAGE} />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
