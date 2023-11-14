import { Meta, StoryObj } from '@storybook/react';

import { AuthContainer } from '@pages/Auth/components/AuthContainer/AuthContainer';

import '../index.css';

const meta: Meta<typeof AuthContainer> = {
  title: 'Auth/AuthContainer',
  component: AuthContainer,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof AuthContainer> = {
  args: {
    children: 'Auth Content',
  },
};
