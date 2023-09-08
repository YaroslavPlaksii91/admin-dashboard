import { FC, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { ROUTES } from '@routes/constants';

import { theme } from '@styles/theme';

const loadLoginPage = () => import('@pages/LoginPage/LoginPage');

const LoginPage = lazy(() =>
  loadLoginPage().then(module => ({ default: module.LoginPage })),
);

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
