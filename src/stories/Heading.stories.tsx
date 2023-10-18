import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';

import { Heading } from '@pages/Home/components/Heading/Heading';
import { theme } from '@styles/theme';

import '../index.css';

const meta: Meta<typeof Heading> = {
  title: 'Home/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    sortDirection: {
      options: ['asc', 'desc'],
      control: { type: 'radio' },
    },
    sortKey: {
      options: ['name', 'title', 'date', 'priority'],
      control: { type: 'radio' },
    },
  },
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof Heading> = {
  args: {
    sortKey: 'name',
    sortDirection: 'asc',
    handleSort: () => {},
    columns: [
      {
        title: 'Name',
        name: 'name',
        size: 4,
      },
      {
        title: 'Title',
        name: 'title',
        size: 3,
      },
      {
        title: 'Date',
        name: 'date',
        size: 3,
      },
      {
        title: 'Priority',
        name: 'priority',
        size: 2,
      },
    ],
  },
};
