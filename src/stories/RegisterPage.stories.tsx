import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { RegisterPage } from '@pages/Auth/RegisterPage/RegisterPage';
import { theme } from '@styles/theme';

import '../index.css';

const meta: Meta<typeof RegisterPage> = {
  title: 'Auth/RegisterPage',
  component: RegisterPage,
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

export const Default: StoryObj<typeof RegisterPage> = {};
