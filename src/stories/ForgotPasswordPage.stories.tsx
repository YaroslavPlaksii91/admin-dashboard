import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { ForgotPasswordPage } from '@pages/Auth/ForgotPasswordPage/ForgotPasswordPage';
import { theme } from '@styles/theme';

import '../index.css';

const meta: Meta<typeof ForgotPasswordPage> = {
  title: 'Auth/ForgotPasswordPage',
  component: ForgotPasswordPage,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <div
            style={{
              maxWidth: '380px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <Story />
          </div>
        </ThemeProvider>
      </MemoryRouter>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof ForgotPasswordPage> = {};
