import { Meta, StoryObj } from '@storybook/react';

import { DatePicker } from '@components/DatePicker/DatePicker';

import '../index.css';

const meta: Meta<typeof DatePicker> = {
  title: 'App/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          maxWidth: '380px',
        }}
      >
        <Story />
      </div>
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
