import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ActionButtons } from '@pages/Home/components/ActionButtons/ActionButtons';
import { ActionButtonsProps } from '@pages/Home/components/ActionButtons/types';

import '../index.css';

const meta: Meta<typeof ActionButtons> = {
  title: 'Home/ActionButtons',
  component: ActionButtons,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof ActionButtons> = (
  args: ActionButtonsProps,
) => {
  const [selectedValue, setSelectedValue] = useState(args.filterValue);

  return (
    <ActionButtons
      {...args}
      filterValue={selectedValue}
      setFilterValue={setSelectedValue}
    />
  );
};

Default.args = {
  addButtonName: 'Add button',
  filterValue: 'Option 1',
  filterTitle: 'Title',
  filterOptions: ['Option 1', 'Option 2', 'Option 3'],
  sortOptions: ['Option 1', 'Option 2', 'Option 3'],
};
