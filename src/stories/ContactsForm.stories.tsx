import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@styles/theme';
import { ContactsForm } from '@pages/Home/Contacts/components/ContactsForm/ContactsForm';

import '../index.css';

const meta: Meta<typeof ContactsForm> = {
  title: 'Home/ContactsForm',
  component: ContactsForm,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <div
          style={{
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof ContactsForm> = {
  args: {
    addContact: () => {},
    editContact: () => {},
  },
};
