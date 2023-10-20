import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContainer } from '@pages/Auth/components/AuthContainer/AuthContainer';

import '../index.css';

const meta: Meta<typeof AuthContainer> = {
  title: 'Auth/AuthContainer',
  component: AuthContainer,
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

export const Default: StoryObj<typeof AuthContainer> = {
  args: {
    children: 'Auth Content',
  },
};
