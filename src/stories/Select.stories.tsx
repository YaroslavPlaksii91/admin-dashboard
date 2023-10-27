import { Meta, StoryObj } from '@storybook/react';

import { Select } from '@components/Select/Select';

import '../index.css';

const meta: Meta<typeof Select> = {
  title: 'App/Select',
  component: Select,
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

export const Default: StoryObj<typeof Select> = {
  args: {
    label: 'Select',
    name: 'select',
    errors: {},
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
  },
};
