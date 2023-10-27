import { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from '@pages/Auth/LoginPage/LoginForm/LoginForm';

import '../index.css';

const meta: Meta<typeof LoginForm> = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          maxWidth: '380px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof LoginForm> = {};
