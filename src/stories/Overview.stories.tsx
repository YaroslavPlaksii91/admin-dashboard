import { Meta, StoryObj } from '@storybook/react';

import { Overview } from '@pages/Home/Overview/Overview';

import '../index.css';

const meta: Meta<typeof Overview> = {
  title: 'Home/Overview',
  component: Overview,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Overview> = {};
