import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { LoginPage } from '@pages/Auth/LoginPage/LoginPage';
import { theme } from '@styles/theme';

import '../index.css';

const meta: Meta<typeof LoginPage> = {
  title: 'Auth/LoginPage',
  component: LoginPage,
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
              position: 'relative',
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

export const Default: StoryObj<typeof LoginPage> = {};
