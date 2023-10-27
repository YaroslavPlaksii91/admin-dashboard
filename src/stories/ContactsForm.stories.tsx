import { Meta, StoryObj } from '@storybook/react';

import { ContactsForm } from '@pages/Home/Contacts/components/ContactsForm/ContactsForm';

import '../index.css';

const meta: Meta<typeof ContactsForm> = {
  title: 'Home/ContactsForm',
  component: ContactsForm,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <Story />
      </div>
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
