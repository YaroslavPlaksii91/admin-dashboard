import { Meta, StoryObj } from '@storybook/react';

import { SignUpMessage } from '@pages/Auth/components/SignUpMessage/SignUpMessage';

import '../index.css';

const meta: Meta<typeof SignUpMessage> = {
  title: 'Auth/SignUpMessage',
  component: SignUpMessage,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof SignUpMessage> = {};
