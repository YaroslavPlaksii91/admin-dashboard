import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@styles/theme';
import { ContactsItem } from '@pages/Home/Contacts/components/ContactsItem/ContactsItem';

import '../index.css';

const meta: Meta<typeof ContactsItem> = {
  title: 'Home/ContactsItem',
  component: ContactsItem,
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

export const Default: StoryObj<typeof ContactsItem> = {
  args: {
    handleDelete: () => {},
    handleEdit: () => {},
    contact: {
      date: '2023-10-02T16:46:06.799Z',
      name: 'Ernest Koch',
      image:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/191.jpg',
      email: 'Beverly44@gmail.com',
      address: '6688 Kutch Highway',
      id: '1',
    },
  },
};
