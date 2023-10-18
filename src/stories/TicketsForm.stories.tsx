import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@styles/theme';
import { TicketsForm } from '@pages/Home/Tickets/components/TicketsForm/TicketsForm';

import '../index.css';

const meta: Meta<typeof TicketsForm> = {
  title: 'Home/TicketsForm',
  component: TicketsForm,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <div
          style={{
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
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
