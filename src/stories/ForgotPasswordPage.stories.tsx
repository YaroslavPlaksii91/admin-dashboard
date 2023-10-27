import { Meta, StoryObj } from '@storybook/react';

import { ForgotPasswordPage } from '@pages/Auth/ForgotPasswordPage/ForgotPasswordPage';

import '../index.css';

const meta: Meta<typeof ForgotPasswordPage> = {
  title: 'Auth/ForgotPasswordPage',
  component: ForgotPasswordPage,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          maxWidth: '380px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof ForgotPasswordPage> = {};
