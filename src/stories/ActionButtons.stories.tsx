import { Meta, StoryObj } from '@storybook/react';

import { ActionButtons } from '@pages/Home/components/ActionButtons/ActionButtons';

import '../index.css';

const meta: Meta<typeof ActionButtons> = {
  title: 'Home/ActionButtons',
  component: ActionButtons,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof ActionButtons> = {
  args: {
    addButtonName: 'Add button',
    filterValue: 'value',
    filterTitle: 'Title',
    filterOptions: ['Option 1', 'Option 2', 'Option 3'],
    sortOptions: ['Option 1', 'Option 2', 'Option 3'],
    onAddClick: () => {},
    setFilterValue: () => {},
    handleSort: () => {},
  },
};
