import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { withRouter } from 'storybook-addon-react-router-v6';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withRouter,
    withThemeFromJSXProvider({
      themes: {
        default: theme,
      },
      defaultTheme: 'default',
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
