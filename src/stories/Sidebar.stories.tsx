import { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '@pages/Home/components/Sidebar/Sidebar';

import '../index.css';

const meta: Meta<typeof Sidebar> = {
  title: 'Home/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Sidebar> = {};
