import { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@styles/theme';
import { Logo } from '@components/Logo/Logo';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Logo />
    </ThemeProvider>
  );
};
