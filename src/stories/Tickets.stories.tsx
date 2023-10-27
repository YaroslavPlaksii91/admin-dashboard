import { Meta, StoryObj } from '@storybook/react';

import { Tickets } from '@pages/Home/Tickets/Tickets';

import '../index.css';

const meta: Meta<typeof Tickets> = {
  title: 'Home/Tickets',
  component: Tickets,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Tickets> = {};
