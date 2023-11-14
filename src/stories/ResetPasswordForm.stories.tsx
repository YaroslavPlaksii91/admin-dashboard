import { Meta, StoryObj } from '@storybook/react';

import { ResetPasswordForm } from '@pages/Auth/ResetPasswordPage/ResetPasswordForm/ResetPasswordForm';

import '../index.css';

const meta: Meta<typeof ResetPasswordForm> = {
  title: 'Auth/ResetPasswordForm',
  component: ResetPasswordForm,
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

export const Default: StoryObj<typeof ResetPasswordForm> = {};
