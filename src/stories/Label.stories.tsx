import { Meta, StoryObj } from '@storybook/react';

import { Label } from '@components/Label/Label';

import '../index.css';

const meta: Meta<typeof Label> = {
  title: 'App/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['default', 'normal', 'low', 'high'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Round: StoryObj<typeof Label> = {
  args: {
    type: 'round',
    color: 'normal',
    text: 'Label',
  },
};

export const Square: StoryObj<typeof Label> = {
  args: {
    type: 'square',
    color: 'normal',
    text: 'Label',
  },
};

export const Success: StoryObj<typeof Label> = {
  args: {
    type: 'round',
    color: 'normal',
    text: 'Label',
  },
};

export const Warning: StoryObj<typeof Label> = {
  args: {
    type: 'round',
    color: 'low',
    text: 'Label',
  },
};

export const Error: StoryObj<typeof Label> = {
  args: {
    type: 'round',
    color: 'high',
    text: 'Label',
  },
};
