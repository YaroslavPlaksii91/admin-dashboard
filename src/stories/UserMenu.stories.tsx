import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { User } from 'firebase/auth';

import { theme } from '@styles/theme';
import { UserMenu } from '@pages/Home/components/UserMenu/UserMenu';
import { authStore } from '@store/auth';

import '../index.css';

authStore.user = { displayName: 'John Doe' } as User;

const meta: Meta<typeof UserMenu> = {
  title: 'Home/UserMenu',
  component: UserMenu,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </MemoryRouter>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof UserMenu> = {};
