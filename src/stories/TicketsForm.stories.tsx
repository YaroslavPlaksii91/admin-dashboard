import { Meta, StoryObj } from '@storybook/react';

import { TicketsForm } from '@pages/Home/Tickets/components/TicketsForm/TicketsForm';

import '../index.css';

const meta: Meta<typeof TicketsForm> = {
  title: 'Home/TicketsForm',
  component: TicketsForm,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof TicketsForm> = {
  args: {
    addTicket: () => {},
    editTicket: () => {},
  },
};
