import { Meta, StoryObj } from '@storybook/react';

import { TicketsItem } from '@pages/Home/Tickets/components/TicketsItem/TicketsItem';

import '../index.css';

const meta: Meta<typeof TicketsItem> = {
  title: 'Home/TicketsItem',
  component: TicketsItem,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof TicketsItem> = {
  args: {
    handleDelete: () => {},
    handleEdit: () => {},
    ticket: {
      date: '2023-10-02T19:31:53.675Z',
      title: 'Adipisci quae alias consequuntur.',
      image:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/662.jpg',
      updated: '2023-10-03T07:43:39.467Z',
      priority: 'high',
      customerName: 'Angel Paucek',
      customerDate: '2023-05-25T20:04:31.286Z',
      id: '1',
    },
  },
};
