import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@styles/theme';
import { Logo } from '@components/Logo/Logo';

import '../index.css';

const meta: Meta<typeof Logo> = {
  title: 'App/Logo',
  component: Logo,
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

export const Vertical: StoryObj<typeof Logo> = {
  args: {
    type: 'vertical',
  },
};

export const Horizontal: StoryObj<typeof Logo> = {
  args: {
    type: 'horizontal',
  },
};
