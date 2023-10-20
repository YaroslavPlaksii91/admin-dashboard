import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';

import { DatePicker } from '@components/DatePicker/DatePicker';
import { theme } from '@styles/theme';

import '../index.css';

const meta: Meta<typeof DatePicker> = {
  title: 'App/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <div
          style={{
            maxWidth: '380px',
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof DatePicker> = {
  args: {
    errors: {},
    label: 'Date Picker',
    name: 'datePicker',
    disabled: false,
    field: {
      value: null,
      ref: null,
      onChange: () => {},
    },
  },
};

export const Disabled: StoryObj<typeof DatePicker> = {
  args: {
    errors: {},
    label: 'Date Picker',
    name: 'datePicker',
    disabled: true,
    field: {
      value: null,
      ref: null,
      onChange: () => {},
    },
  },
};
