import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';

import { Select } from '@components/Select/Select';
import { theme } from '@styles/theme';

import '../index.css';

const meta: Meta<typeof Select> = {
  title: 'App/Select',
  component: Select,
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
