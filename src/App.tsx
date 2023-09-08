import { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@styles/theme';

export const App: FC = () => {
  return <ThemeProvider theme={theme}></ThemeProvider>;
};
