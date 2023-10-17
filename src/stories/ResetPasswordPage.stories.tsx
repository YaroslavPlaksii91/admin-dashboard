import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { ResetPasswordPage } from '@pages/Auth/ResetPasswordPage/ResetPasswordPage';
import { theme } from '@styles/theme';

import '../index.css';

const meta: Meta<typeof ResetPasswordPage> = {
  title: 'Auth/ResetPasswordPage',
  component: ResetPasswordPage,
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

export const Default: StoryObj<typeof ResetPasswordPage> = {};
