import { Meta, StoryObj } from '@storybook/react';

import { ForgotPasswordForm } from '@pages/Auth/ForgotPasswordPage/ForgotPasswordForm/ForgotPasswordForm';

import '../index.css';

const meta: Meta<typeof ForgotPasswordForm> = {
  title: 'Auth/ForgotPasswordForm',
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          maxWidth: '380px',
          margin: '100px auto',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof ForgotPasswordForm> = {};
