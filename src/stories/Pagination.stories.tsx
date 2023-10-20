import { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '@components/Pagination/Pagination';

import '../index.css';

const meta: Meta<typeof Pagination> = {
  title: 'App/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    page: {
      options: [1, 2, 3, 4],
      control: { type: 'radio' },
    },
    rowsPerPage: {
      options: [8, 12, 16, 20],
      control: { type: 'radio' },
    },
    count: {
      options: [20, 30, 40, 50],
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Pagination> = {
  args: {
    page: 1,
    setPage: () => {},
    rowsPerPage: 8,
    setRowsPerPage: () => {},
    count: 50,
  },
};
