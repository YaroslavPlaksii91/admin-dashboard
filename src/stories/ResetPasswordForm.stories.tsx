import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { ResetPasswordForm } from '@pages/Auth/ResetPasswordPage/ResetPasswordForm/ResetPasswordForm';
import { theme } from '@styles/theme';

import '../index.css';

const meta: Meta<typeof ResetPasswordForm> = {
  title: 'Auth/ResetPasswordForm',
  component: ResetPasswordForm,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <div
            style={{
              maxWidth: '380px',
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

export const Default: StoryObj<typeof ResetPasswordForm> = {};
