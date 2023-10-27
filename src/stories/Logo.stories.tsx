import { Meta, StoryObj } from '@storybook/react';

import { Logo } from '@components/Logo/Logo';

import '../index.css';

const meta: Meta<typeof Logo> = {
  title: 'App/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;

export const Vertical: StoryObj<typeof Logo> = {
  args: {
    type: 'vertical',
  },
};

export const Horizontal: StoryObj<typeof Logo> = {
  args: {
    type: 'horizontal',
  },
};
