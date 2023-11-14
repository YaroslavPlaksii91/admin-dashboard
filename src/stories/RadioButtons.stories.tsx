import { Meta, StoryObj } from '@storybook/react';

import { RadioButtons } from '@pages/Home/components/RadioButtons/RadioButtons';

import '../index.css';

const meta: Meta<typeof RadioButtons> = {
  title: 'Home/RadioButtons',
  component: RadioButtons,
  tags: ['autodocs'],
  argTypes: {
    value: {
      options: ['Option 1', 'Option 2', 'Option 3'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof RadioButtons> = {
  args: {
    value: 'Option 1',
    handleChange: () => {},
    title: 'Radio Buttons',
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};
