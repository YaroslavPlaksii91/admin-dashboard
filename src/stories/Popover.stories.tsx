import { Meta, StoryObj } from '@storybook/react';

import { Popover } from '@pages/Home/components/Popover/Popover';

import '../index.css';

const meta: Meta<typeof Popover> = {
  title: 'Home/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Popover> = {
  args: {
    id: 'id',
    open: true,
    anchorEl: null,
    handleClose: () => {},
    children: 'I am Popover',
  },
};
