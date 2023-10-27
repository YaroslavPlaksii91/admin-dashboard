import { Meta, StoryObj } from '@storybook/react';

import { LoginPage } from '@pages/Auth/LoginPage/LoginPage';

import '../index.css';

const meta: Meta<typeof LoginPage> = {
  title: 'Auth/LoginPage',
  component: LoginPage,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          maxWidth: '380px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof LoginPage> = {};
