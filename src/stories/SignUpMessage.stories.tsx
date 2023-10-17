import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { SignUpMessage } from '@pages/Auth/components/SignUpMessage/SignUpMessage';

import '../index.css';

const meta: Meta<typeof SignUpMessage> = {
  title: 'Auth/SignUpMessage',
  component: SignUpMessage,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof SignUpMessage> = {};
