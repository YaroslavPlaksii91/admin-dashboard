import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Link } from '@components/Link/Link';

import '../index.css';

const meta: Meta<typeof Link> = {
  title: 'App/Link',
  component: Link,
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

export const Default: StoryObj<typeof Link> = {
  args: {
    url: '/',
    children: 'Link',
  },
};
