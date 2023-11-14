import { Meta, StoryObj } from '@storybook/react';

import { CheckboxComponent } from '@components/Checkbox/Checkbox';

import '../index.css';

const meta: Meta<typeof CheckboxComponent> = {
  title: 'App/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof CheckboxComponent> = {};
