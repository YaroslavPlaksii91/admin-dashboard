import { Meta, StoryObj } from '@storybook/react';

import { Link } from '@components/Link/Link';

import '../index.css';

const meta: Meta<typeof Link> = {
  title: 'App/Link',
  component: Link,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Link> = {
  args: {
    url: '/',
    children: 'Link',
  },
};
