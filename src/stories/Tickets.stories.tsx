import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@styles/theme';
import { Tickets } from '@pages/Home/Tickets/Tickets';

import '../index.css';

const meta: Meta<typeof Tickets> = {
  title: 'Home/Tickets',
  component: Tickets,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof Tickets> = {};
