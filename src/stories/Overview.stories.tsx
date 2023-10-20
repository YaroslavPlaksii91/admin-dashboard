import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@styles/theme';
import { Overview } from '@pages/Home/Overview/Overview';

import '../index.css';

const meta: Meta<typeof Overview> = {
  title: 'Home/Overview',
  component: Overview,
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

export const Default: StoryObj<typeof Overview> = {};
