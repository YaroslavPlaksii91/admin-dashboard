import { Meta, StoryObj } from '@storybook/react';

import { RegisterPage } from '@pages/Auth/RegisterPage/RegisterPage';

import '../index.css';

const meta: Meta<typeof RegisterPage> = {
  title: 'Auth/RegisterPage',
  component: RegisterPage,
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

export const Default: StoryObj<typeof RegisterPage> = {};
