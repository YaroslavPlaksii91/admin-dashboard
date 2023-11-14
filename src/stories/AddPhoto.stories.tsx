import { Meta, StoryObj } from '@storybook/react';

import { AddPhoto } from '@components/AddPhoto/AddPhoto';

import '../index.css';

const meta: Meta<typeof AddPhoto> = {
  title: 'App/AddPhoto',
  component: AddPhoto,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: [60, 44],
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof AddPhoto> = {
  args: {
    label: 'Add new photo',
    name: 'addPhoto',
    errors: {},
    src: '',
    size: 60,
  },
};

export const WithoutLabel: StoryObj<typeof AddPhoto> = {
  args: {
    label: '',
    name: 'addPhoto',
    errors: {},
    src: '',
    size: 44,
  },
};
