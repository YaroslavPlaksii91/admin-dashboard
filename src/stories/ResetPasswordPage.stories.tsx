import { Meta, StoryObj } from '@storybook/react';

import { ResetPasswordPage } from '@pages/Auth/ResetPasswordPage/ResetPasswordPage';

import '../index.css';

const meta: Meta<typeof ResetPasswordPage> = {
  title: 'Auth/ResetPasswordPage',
  component: ResetPasswordPage,
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

export const Default: StoryObj<typeof ResetPasswordPage> = {};
