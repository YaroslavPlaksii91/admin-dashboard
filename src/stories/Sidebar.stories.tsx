import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@styles/theme';
import { Sidebar } from '@pages/Home/components/Sidebar/Sidebar';

import '../index.css';

const meta: Meta<typeof Sidebar> = {
  title: 'Home/Sidebar',
  component: Sidebar,
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

export const Default: StoryObj<typeof Sidebar> = {};
