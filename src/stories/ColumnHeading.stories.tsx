import { Meta, StoryObj } from '@storybook/react';

import { ColumnHeading } from '@pages/Home/components/ColumnHeading/ColumnHeading';

import '../index.css';

const meta: Meta<typeof ColumnHeading> = {
  title: 'Home/ColumnHeading',
  component: ColumnHeading,
  tags: ['autodocs'],
  argTypes: {
    sortDirection: {
      options: ['asc', 'desc'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof ColumnHeading> = {
  args: {
    name: 'name',
    title: 'Name',
    sortKey: 'name',
    sortDirection: 'asc',
    size: 3,
  },
};
