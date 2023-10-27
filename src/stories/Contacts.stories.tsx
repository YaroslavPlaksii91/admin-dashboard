import { Meta, StoryObj } from '@storybook/react';

import { Contacts } from '@pages/Home/Contacts/Contacts';

import '../index.css';

const meta: Meta<typeof Contacts> = {
  title: 'Home/Contacts',
  component: Contacts,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Contacts> = {};
