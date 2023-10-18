import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@styles/theme';
import { Contacts } from '@pages/Home/Contacts/Contacts';

import '../index.css';

const meta: Meta<typeof Contacts> = {
  title: 'Home/Contacts',
  component: Contacts,
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

export const Default: StoryObj<typeof Contacts> = {};
