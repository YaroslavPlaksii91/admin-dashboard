import { Meta, StoryObj } from '@storybook/react';

import { RegisterForm } from '@pages/Auth/RegisterPage/RegisterForm/RegisterForm';

import '../index.css';

const meta: Meta<typeof RegisterForm> = {
  title: 'Auth/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          maxWidth: '380px',
          margin: '50px auto',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof RegisterForm> = {};
